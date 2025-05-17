import React from 'react';
import { useState, useEffect } from 'react';
import products from '../../data/products';
import { IconMinus, IconPlus, IconBus, IconProfile2} from '../Icon/Icon';
import styles from './PriceBox.module.css';




const PriceBox = ({productId}) => {
    const [number, setNumber] = useState(1);
    const [price, setPrice] = useState(0);

    useEffect(() => {
        const product = products.find(product => product.id === productId);
        if (product) {
            setPrice(product.price * number);
        } else {
            setPrice(0);
        }
    }, [productId, number]);

    const increment = () => {
        setNumber(number + 1);
    }
    
    const decrement = () => {
        if (number > 1) {
            setNumber(number - 1);
        } else if (number < 1) {
            setNumber(1);
        }
    }

    return (
        <div className={styles.fixedBox}>
            <div className={styles.container}>
                <div className={styles.priceBox}>
                    
                    <div className={styles.price}>
                        <div className={styles.priceNumber}>{price}</div>
                        <div className={styles.priceToman}>تومان</div>
                    </div>

                    <div className={styles.quantity}>
                        <div className={styles.numberHandeling}>
                            <IconMinus size='32px' color='var(--gray-color50)' variant='outline' onClick={() => {decrement()}}/>
                            <input type="number" className={styles.number} inputMode='numeric' value={number} onChange={(e) => {setNumber(e.target.value)}} />
                            <IconPlus size='32px' color='var(--gray-color50)' variant='outline' onClick={() => {increment()}}/>
                        </div>

                        <button className={styles.shoppingCart}>
                            افزودن به سبد خرید
                        </button>
                    </div>
                </div>

                <div className={styles.additionals}>
                    <ul>
                        <li>
                            <IconBus variant='outline'size='20px' color='var(--primary-color70)'  />
                            <p>7 روز ضمانت کالا</p>
                        </li>
                        <li>
                            <IconProfile2 variant='outline' size='20px' color='var(--primary-color70)' />
                            <p>پشتیبانی سریع</p>
                        </li>
                    </ul>    
                </div>

            </div>
        </div>
    )
}

export default PriceBox;




