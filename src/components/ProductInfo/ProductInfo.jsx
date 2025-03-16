import React from "react";
import styles from "./ProductInfo.module.css";
import products from "../../data/products";
import { useState, useEffect } from "react";
import { IconStar, IconCategory } from "../Icon/Icon";


const ProductInfo = ({productId}) => {
    const [product, setProduct] = useState(null);

    useEffect(() => {
        const product = products.find(product => product.id === productId);
        if (product) {
            setProduct(product);
        }
    }, [productId]);
    
    return (
        <div className={styles.root}>

            <div className={styles.container}>

                <div className={styles.productName}>
                    <div className={styles.englishName}>
                        {product?.englishName}
                    </div>
                    <div className={styles.persianName}>
                        {product?.name}
                    </div>
                    <div className={styles.productScore}>
                    <IconStar size="18px" color="var(--primary-color60)" variant="outline"/>
                    <span>{product?.Score}</span>
                </div><hr />
                </div>

                <div className={styles.CatSKU}>
                    <div className={styles.category}>
                        <IconCategory size="18px" color="var(--primary-color60)" variant="outline"/>
                        <span>دسته بندی: </span>
                        <span>{product?.category}</span>
                    </div>
                    <div className={styles.sku}>
                        <span>SKU: {product?.SKU}</span>
                    </div>
                </div>



                <div className={styles.productDetailInfo}>
                    <div className={styles.species}>
                        <span>گونه : </span>
                        <span>{product?.Species}</span>
                    </div>
                    <div className={styles.caffeineContent}>
                        <span>میزان کافئین : </span>
                        <span>{product?.CaffeineContent}</span>
                    </div>
                    <div className={styles.origin}>
                        <span>خاستگاه : </span>
                        <span>{product?.Origin}</span>
                    </div>
                    <div className={styles.ingredients}>
                        <span>مواد تشکیل دهنده : </span>
                        <span>{product?.Ingredients}</span>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default ProductInfo;


