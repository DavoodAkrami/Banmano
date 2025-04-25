import Products from "../../../data/products"
import styles from "./Home.module.css"
import { useNavigate } from "react-router-dom"
import links from "../../../routes/links"

const Home = () => {
    const navigate = useNavigate()

    return (
        <div className={styles.root}>
            <h2>محصولات</h2>
            <div className={styles.home}>
                {Products.map(product => (
                    <div 
                        key={product.id} 
                        className={styles.productBox} 
                        onClick={() => navigate(`${links.client.product}/${product.id}`)}
                    >
                        <div>
                            <img src={product.imageUrl[0]} alt={product.name} />
                        </div>
                        <div className={styles.productInfo}>
                            <div>{product.name}</div>
                            <div className={styles.price}>
                                <div>{product.price}</div>
                                <span>تومان</span>
                            </div>
                        </div>
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Home