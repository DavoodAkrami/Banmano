import clsx from 'clsx';
import styles from './Button.module.css';

const Button = (props) => {
    return (
        <button 
            onClick={props.onClick}
            className={clsx(
                styles.root,
            
                //size 
                props.size === 'small' && styles.sizeSmall,
                props.size === 'medium' && styles.sizeMedium,
                props.size === 'large' && styles.sizeLarge,

                //type
                props.type === 'primary' && styles.typePrimary,
                props.type === 'secondary' && styles.typeSecondary,
                props.type === 'gray' && styles.typeGray,

                //disabled
                props.disabled && styles.disabled,

                //variants   
                props.variant === 'fill' && styles.variantFill,
                props.variant === 'outline' && styles.variantOutline,
            )}>
                {props.iconLeft && <span className={styles.iconLeft}>{props.iconLeft}</span>}
                {props.children}
                {props.iconRight && <span className={styles.iconRight}>{props.iconRight}</span>}
            </button>
    )
}

export default Button;