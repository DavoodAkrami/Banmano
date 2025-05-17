import { Link } from 'react-router-dom';
import styles from './Breadcrumb.module.css';

const Breadcrumbs = ({ items }) => {
    return (
        <nav aria-label="Breadcrumb" className={styles.breadcrumb}>
            <ol className={styles.breadcrumbList}>
                {items.map((item, index) => (
                    <li key={index} className={styles.breadcrumbItem}>
                        {index < items.length - 1 ? (
                            <>
                                <Link to={item.path} className={styles.breadcrumbLink}>
                                    {item.label}
                                </Link>
                                <span className={styles.separator}>/</span>
                            </>
                        ) : (
                            <span className={styles.breadcrumbCurrent}>
                                {item.label}
                            </span>
                        )}
                    </li>
                ))}
            </ol>
        </nav>
    );
};

export default Breadcrumbs;