import { useNavigate, useLocation} from "react-router-dom";
import { IconProfile1, IconThreeDot, IconHome } from "../../components/Icon/Icon";
import styles from "./Header.module.css"
import Breadcrumbs from "../../components/Breadcrumb/Breadcrumb";
import links from "../../routes/links";
import { useContext, useState } from "react";
import { UserContext } from "../../context/UsersContext";
import AiChatBot from "../../components/AiChatBot/AiChatBot";

const Header = () => {
    const navigate = useNavigate()
    const location = useLocation()
    const { user, setUser } = useContext(UserContext)
    const [isAiChatOpen, setIsAiChatOpen] = useState(false);
    
    const handleLogout = () => {
        localStorage.removeItem('token')
        localStorage.removeItem('user')
        setUser(null)
        navigate(links.client.home)
    }

    const getBreadcrumbItems = () => {
        const pathSegments = location.pathname.split('/').filter(Boolean)
        const items = []
        
        items.push({
            label: 'Home',
            path: '/'
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

    const isAuth = !!user;

    return (
        <>
            <div className={styles.root}>
                <div className={styles.header}>
                    <div className={styles.home}>
                        <IconHome size="32px" color="var(--primary-color60)" onClick={() => navigate(links.client.home)}/>
                    </div>
                    <div className={styles.profile}>
                        {isAuth ? (
                            <div className={styles.authButtons}>
                                <IconProfile1 size="32px" color="var(--primary-color60)" onClick={() => navigate(links.panel.panel)} />
                                <button className={styles.logoutButton} onClick={handleLogout}>
                                    Logout
                                </button>
                            </div>
                        ) : (
                            <div className={styles.signIn} onClick={() => navigate(links.client.auth)}>
                                Sign-in/Sign-up
                            </div>
                        )}
                    </div>
                    <div className={styles.menu}>
                        <IconThreeDot 
                            size="32px" 
                            color="var(--primary-color60)" 
                            onClick={() => setIsAiChatOpen(true)}
                        />
                    </div>
                    <div className={styles.banmano}>
                        <h1>Banmano</h1>
                    </div>
                </div><hr />
                <div className={styles.breadcrumb}>
                    <Breadcrumbs items={getBreadcrumbItems()}  />
                </div>
            </div>
            <AiChatBot isOpen={isAiChatOpen} onClose={() => setIsAiChatOpen(false)} />
        </>
    )
}

export default Header