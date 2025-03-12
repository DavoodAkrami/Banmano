import clsx from 'clsx';
import styles from './Button.module.css';

const Button = ({size='32px', type='primary', disabled, variant='fill', className, children, props}) => {
    return (
        <button 
            onClick={props.onClick}
            className={clsx(
                styles.root,
            
                //size 
                size === 'small' && styles.sizeSmall,
                size === 'medium' && styles.sizeMedium,
                size === 'large' && styles.sizeLarge,

                //type
                type === 'primary' && styles.typePrimary,
                type === 'secondary' && styles.typeSecondary,
                type === 'gray' && styles.typeGray,

                //disabled
                disabled && styles.disabled,

                //variants   
                variant === 'fill' && styles.variantFill,
                variant === 'outline' && styles.variantOutline,

                className && className
            )}
            {...props}
            >
                {children}
            </button>
    )
}

export default Button;