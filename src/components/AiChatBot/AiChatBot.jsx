import React, { useState, useRef, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import Products from '../../data/products';
import links from '../../routes/links';
import './AiChatBot.css';

const AiChatBot = ({ isOpen, onClose }) => {
    const [userInput, setUserInput] = useState('');
    const [messages, setMessages] = useState([]);
    const [matchedProducts, setMatchedProducts] = useState([]);
    const messagesEndRef = useRef(null);
    const navigate = useNavigate();

    const scrollToBottom = () => {
        messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
    };

    useEffect(() => {
        scrollToBottom();
    }, [messages]);

    // Convert products to a readable text format for system prompt
    const getProductsText = () => {
        return Products.map(product => 
            `نام محصول: ${product.name}\n` +
            `قیمت: ${product.price} تومان\n` +
            `ویژگی‌ها: ${product.Species}\n` +
            `منشاء: ${product.Origin}\n` +
            `کافئین: ${product.CaffeineContent}\n\n`
        ).join('');
    };

    // Find matching products in the response
    const findMatchingProducts = (text) => {
        const matches = Products.filter(product => 
            text.toLowerCase().includes(product.name.toLowerCase()) ||
            text.toLowerCase().includes(product.englishName.toLowerCase())
        );
        return matches;
    };

    const handleProductClick = (productId) => {
        navigate(`/product/${productId}`);
        onClose();
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!userInput.trim()) return;

        // Add user message
        const userMessage = { type: 'user', content: userInput };
        setMessages(prev => [...prev, userMessage]);
        setUserInput('');

        try {
            const response = await fetch('http://localhost:8000/ask', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    user_input: userInput,
                    system_prompt: getProductsText()
                }),
            });

            const data = await response.json();
            
            // Add AI response
            const aiMessage = { type: 'ai', content: data.response };
            setMessages(prev => [...prev, aiMessage]);
            
            // Find and set matching products
            const matches = findMatchingProducts(data.response);
            setMatchedProducts(matches);
        } catch (error) {
            console.error('Error:', error);
            const errorMessage = { type: 'ai', content: 'خطا در ارتباط با سرور' };
            setMessages(prev => [...prev, errorMessage]);
        }
    };

    if (!isOpen) return null;

    return (
        <div className="ai-chatbot-overlay" onClick={onClose}>
            <div className="ai-chatbot" onClick={e => e.stopPropagation()}>
                <div className="chat-header">
                    <h3>دستیار هوشمند قهوه‌کا</h3>
                    <button className="close-button" onClick={onClose}>×</button>
                </div>
                <div className="chat-messages">
                    {messages.map((message, index) => (
                        <div key={index} className={`message ${message.type}`}>
                            <div className="message-content">{message.content}</div>
                        </div>
                    ))}
                    <div ref={messagesEndRef} />
                </div>
                {matchedProducts.length > 0 && (
                    <div className="matched-products">
                        <h4>محصولات مرتبط:</h4>
                        <div className="products-grid">
                            {matchedProducts.map(product => (
                                <div 
                                    key={product.id} 
                                    className="product-card"
                                    onClick={() => handleProductClick(product.id)}
                                >
                                    <img src={product.imageUrl[0]} alt={product.name} />
                                    <h4>{product.name}</h4>
                                    <p>قیمت: {product.price} تومان</p>
                                </div>
                            ))}
                        </div>
                    </div>
                )}
                <form onSubmit={handleSubmit} className="chat-input-container">
                    <input
                        type="text"
                        value={userInput}
                        onChange={(e) => setUserInput(e.target.value)}
                        placeholder="سوال خود را بپرسید..."
                        className="chat-input"
                    />
                    <button type="submit" className="send-button">ارسال</button>
                </form>
            </div>
        </div>
    );
};

export default AiChatBot;
