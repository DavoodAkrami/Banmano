
import clsx from 'clsx';
import styles from './Icon.module.css';

// const Icon = ({name, variant = 'bold', color = 'currentColor', size = 'medium' }) => {


//     const iconPath = `../assest/Icons/${variant}/${name}.svg`;
    
//     return (
//         <span 
//             style={{ color: color }}
//         >
//             <img 
//                 src={iconPath} 
//                 alt={`${name} icon`}
//                 width="100%"
//                 height="100%"
//             />
//         </span>
//     );
// };

const Icon = (props) => {
    const iconPath = `/src/assest/Icons/${props.variant}/${props.name}.svg`;

    return (
        <span style={{color: `${props.color}`}}>
            <img 
                src={iconPath}
                alt={`${props.name} icon `}
                className={clsx(
                    styles.root,


                    props.size === 'small' && styles.sizeSmall,
                    props.size === 'medium' && styles.sizeMedium,
                    props.size === 'large' && styles.sizeLarge,
                )} 
            />
        </span>
    )
}

export default Icon