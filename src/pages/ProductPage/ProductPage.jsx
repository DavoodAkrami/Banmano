import Slider from "../../components/slider/slider";
import ProductInfo from "../../components/ProductInfo/ProductInfo";
import PriceBox from "../../components/Price_box/priceBox";
import React from "react";
import styles from "./ProductPage.module.css";

const ProductPage = ({productId}) => {
    return (
        <div className={styles.root}>
            <div className={styles.container}>

                <div className={styles.slider}>
                    <Slider productId={productId}/>
                </div>

                <div className={styles.productInfo}>
                    <ProductInfo productId={productId}/>
                </div>

                <div className={styles.priceBox}>
                    <PriceBox productId={productId}/>
                </div>
                
            </div>
        </div>
    )
}

export default ProductPage;



