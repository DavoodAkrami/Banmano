import { useState, useEffect } from "react";
import products from "../../data/products";
import React from "react";
import { IconstrokeLeft, IconstrokeRight, IconHeart, IconSend } from "../Icon/Icon";
import styles from "./slider.module.css";

const Slider = ({productId}) => {
    const [selected, setSelected] = useState(0)
    const [images, setImages] = useState([])
    const [slide, setSlide] = useState(0)
    const chunkSize = 3;

    useEffect(() => {
        const product = products.find(product => product.id === productId);
        if (product) {
            setImages(product.imageUrl);
        } else {
            setImages([]);
        }
    }, [productId]);

    const handlePrevious = () => {
        if (images.length <= chunkSize) {
            return;
        }

        if (slide > 0) {
            setSlide(slide - 1);
        } else {
            const totalChunks = images.length % chunkSize === 0 
                ? Math.floor(images.length / chunkSize)
                : Math.floor(images.length / chunkSize) + 1;
            setSlide(totalChunks - 1);
        }
    };

    const handleNext = () => {
        if (images.length <= chunkSize) {
            return;
        }

        const lastPossibleStartIndex = images.length - chunkSize;
        const currentStartIndex = (slide * chunkSize) - (slide > 0 ? 1 : 0);

        if (currentStartIndex < lastPossibleStartIndex) {
            setSlide(slide + 1);
        }
    };

    const getCurrentChunk = () => {
        if (images.length <= chunkSize) {
            return images;
        }
        
        if (images.length % chunkSize === 0) {
            const startIndex = slide * chunkSize;
            const endIndex = startIndex + chunkSize;
            return images.slice(startIndex, endIndex);
        } else {
            if (slide === 0) {
                return images.slice(0, chunkSize);
            } else {
                const startIndex = (slide * chunkSize) - 1;
                const endIndex = Math.min(startIndex + chunkSize, images.length);
                return images.slice(startIndex, endIndex);
            }
        }
    };


    return (
        <div className={styles.root}>
            
            <div className={styles.selectedImage}>
                <img src={images[selected]} alt="product" />
                <div className={styles.icon}>
                    <IconHeart size="24px" color="var(--primary-color60)" variant="outline"/>
                    <IconSend size="24px" color="var(--primary-color60)" variant="outline"/>
                </div>
            </div>

            <div className={styles.slider}>

                <div className={`${styles.handlePrevious} ${slide === 0 ? styles.disabled : ""}`} onClick={handlePrevious}>
                    <IconstrokeRight size="10px" color="var(--gray-color50)" variant="outline"/>
                </div>

                {images.length > 0 && (
                    <div className={styles.slide}>
                        {getCurrentChunk().map((image, index) => {
                            const actualIndex = (slide * chunkSize) + index;
                            
                            return (
                                <div 
                                    className={`${styles.slideItem} ${selected === actualIndex ? styles.active : ""}`} 
                                    key={actualIndex}
                                >
                                    <img 
                                        src={image} 
                                        alt={`slide ${actualIndex + 1}`} 
                                        onClick={() => setSelected(actualIndex)} 
                                    />
                                </div>
                            )
                        })}
                    </div>
                )}

                <div 
                    className={`${styles.handleNext} ${
                        (slide * chunkSize) - (slide > 0 ? 1 : 0) >= images.length - chunkSize 
                        ? styles.disabled 
                        : ""
                    }`} 
                    onClick={handleNext}
                >
                    <IconstrokeLeft size="10px" color="var(--gray-color50)" variant="outline" />
                </div>
            </div>
        </div>
    )

}

export default Slider;