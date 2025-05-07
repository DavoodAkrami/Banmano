import styles from "./MyProfile.module.css"
import PanelMenu from "../../../../components/PanelMenu/PanelMenu"
import arrowOfPanels from "../../../../data/Panels"
import { useState } from "react"
import ProfileUsers from "../ProfileUser/ProfileUsers"
import ArrowOfPanels from "../../../../data/Panels"
import Products from "../Products/Products"


const MyProfile = () => {

    const [selectedPanel, setSelectedPanel] = useState(arrowOfPanels[0].name);

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <div className={styles.menu}>
                    <PanelMenu arrowOfPanels={arrowOfPanels} selectedPanel={selectedPanel} setSelectedPanel={setSelectedPanel} />
                </div>
                <div className={styles.content}>
                    {selectedPanel === 'ProfileUsers' && <ProfileUsers />}
                    {selectedPanel === 'ProductsPanel' && <Products />}
                </div>
            </div>
        </div>
    )
}

export default MyProfile;