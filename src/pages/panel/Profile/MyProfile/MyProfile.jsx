import styles from "./MyProfile.module.css"
import { useState } from "react"
import ProfileUsers from "../ProfileUser/ProfileUsers"
import ArrowOfPanels from "../../../../data/Panels"
import Products from "../Products/Products"
import * as React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';



const SideBar = ({ onSelect }) => {
    return (
        <div className={styles.sideBar}>
            <Drawer variant="permanent" anchor="left" className={"sideBar"} >
                <List>
                    <ListItem button onClick={() => onSelect('ProfileUser')}>
                        <ListItemText primary="Profile" />
                    </ListItem>
                    <ListItem button onClick={() => onSelect('Product')}>
                        <ListItemText primary="Product" />
                    </ListItem>
                </List>
            </Drawer>
      </div>
    )
}



const MyProfile = () => {
    const [selectedPanle, setSelectedPanel] = useState('ProfileUser')
    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <SideBar onSelect={setSelectedPanel} />
                <main style={{marginLeft: 200,  padding: 20}}>
                    {selectedPanle === 'ProfileUser' && <div>{<ProfileUsers />}</div>}
                    {selectedPanle === 'Product' && <div>{<Products />}</div>}
                </main>
            </div>
        </div>
    )
}

export default MyProfile;