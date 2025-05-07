import { useNavigate, useLocation} from "react-router-dom";
import { IconProfile1, IconThreeDot, IconHome } from "../../components/Icon/Icon";
import styles from "./Header.module.css"
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumb";





const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    
    const getBreadcrumbItems = () => {
        const pathSegments = location.pathname.split('/').filter(Boolean)
        const items = []
        
        items.push({
            label: 'Home',
            path: '/banmano'
        })
        
        let currentPath = ''
        pathSegments.forEach(segment => {
            currentPath += `/${segment}`
            if (segment !== 'banmano') { 
                items.push({
                    label: segment.charAt(0).toUpperCase() + segment.slice(1),
                    path: currentPath
                })
            }
        })
        
        return items
    }

    return (
        <div className={styles.root}>
            <div className={styles.header}>
                <div className={styles.home}>
                    <IconHome size="32px" color="var(--primary-color60)" onClick={() => navigate('banmano')}/>
                </div>
                <div className={styles.profile}>
                    <IconProfile1 size="32px" color="var(--primary-color60)" onClick={() => navigate('banmano/panel') } /> 
                </div>
                <div className={styles.menu}>
                    <IconThreeDot size="32px" color="var(--primary-color60)" />
                </div>
                <div className={styles.banmano}>
                    <h1>Banmano</h1>
                </div>
            </div><hr />
            <div className={styles.breadcrumb}>
                    <Breadcrumbs items={getBreadcrumbItems()}  />
            </div>
        </div>
    )
}

export default Header