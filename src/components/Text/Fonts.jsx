import clsx from 'clsx';
import styles from './Font.module.css';

const Text = (props) => {
    return (
        <p
            className={clsx(
                styles.root,
                
                props.font === 'font1' && styles.font1,
                props.font === 'font2' && styles.font2,
                props.font === 'font3' && styles.font3,
                props.font === 'font4' && styles.font4,
                props.font === 'font5' && styles.font5,
                props.font === 'font6' && styles.font6,
                props.font === 'font7' && styles.font7,
                props.font === 'font8' && styles.font8,
                props.font === 'font9' && styles.font9,
            )}>
                {props.children}
            </p>
    )
}

export default Text;

