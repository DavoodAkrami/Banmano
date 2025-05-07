import styles from "./PanelMenu.module.css";


const PanelMenu = ({arrowOfPanels, selectedPanel, setSelectedPanel}) => {


    return (
        <div className={styles.root}>
            <div className={styles.panel}>
                <div className={styles.panelTitle}>
                    <h1>Panel Menu</h1>
                </div>
                <div className={styles.panels}>
                    {arrowOfPanels.map((panel, index) => (
                        <div key={index} className={styles.panelItem}>
                            <div className={`${styles.panelList} ${selectedPanel === panel.name ? styles.active : ''}`} onClick={() => setSelectedPanel(panel.name)}>
                                {panel.name}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default PanelMenu;
