import React from 'react';
import { useState, useEffect } from 'react';
import Button from '../Button/Button';
import products from '../../data/products';
import Icon from '../Icon/Icon';

const PriceBox = (props) => {
    const [number, setNumber] = useState(1);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const product = products.find(product => product.id === props.productId);
        if (product) {
            setPrice(product.price * number);
        } else {
            setPrice(0);
        }
    }, [props.productId, number]);
   


    return (
       <div className="PriceBox">
            <div className="priceHandeling">
                <span style={{marginLeft: '8px'}}>{price}</span>
                <span style={{color: 'var(--gray-color50)'}}>تومان</span>
            </div>

            <div className="numberHandeling">
               <Button 
                    onClick={() => setNumber(number - 1)} 
                    disabled={number < 2} 
                    type='primary'
                    variant='outline'
                    size='large'
               >
                    <Icon name='minus' variant='outline' color='var(--primary-color60)' size='large'/>
                </Button>

                <span>{number}</span>
                
                <Button 
                    onClick={() => setNumber(number + 1)}
                    type='primary'
                    variant='outline'
                    size='large'
                >
                </Button>
            </div>
       </div>
    )
}

export default PriceBox;
