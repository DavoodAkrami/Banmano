import { useState, useEffect } from "react";
import products from "../../data/products";
import React from "react";
import { IconstrokeLeft, IconstrokeRight } from "../Icon/Icon";
import styles from "./slider.module.css";

const Slider = ({productId}) => {
    const [selected, setSelected] = useState(0)
    const [images, setImages] = useState([])
    const [slide, setSlide] = useState(0)

    useEffect(() => {
        const product = products.find(product => product.id === productId);
        if (product) {
            setImages(product.imageUrl);
        } else {
            setImages([]);
        }
    }, [productId]);

    const handlePrevious = () => {
        if (slide > 0) {
            setSlide(slide - 3);
        } else {
            setSlide(0);
        }
    }

    const handleNext = () => {
        if (slide < images.length - 1) {
            setSlide(slide + 3);
        } else {
            setSlide(0);
        }
    }


    return (
        <div className={styles.root}>
            
            <div className={styles.selectedImage}>
                <img src={images[selected]} alt="product" />
            </div>

            <div className={styles.slider}>

                <div className={styles.handlePrevious}>
                    <IconstrokeRight size="10px" color="var(--gray-color50)" variant="outline" onClick={handlePrevious}/>
                </div>

                {images.length > 0 && (
                    <div className={styles.slide}>
                        {images.map((image, index) => {
                            
                            return (
                                <div 
                                    className={`${styles.slideItem} ${selected === index ? styles.active : ""}`} 
                                    key={index}
                                >
                                    <img 
                                        src={image} 
                                        alt={`slide ${index + 1}`} 
                                        onClick={() => setSelected(index)} 
                                    />
                                </div>
                            )
                        })}
                    </div>
                )}

                <div className={styles.handleNext}>
                    <IconstrokeLeft size="10px" color="var(--gray-color50)" variant="outline" onClick={handleNext}/>
                </div>
            </div>
        </div>
    )

}

export default Slider;