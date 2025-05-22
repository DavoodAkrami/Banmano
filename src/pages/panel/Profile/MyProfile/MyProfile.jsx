import styles from "./MyProfile.module.css"
import { useState } from "react"
import ProfileUsers from "../ProfileUser/ProfileUsers"
import Products from "../Products/Products"
import * as React from 'react';
import { Drawer, List, ListItem, ListItemText } from '@mui/material';

const SideBar = ({ onSelect }) => {
    return (
        <Drawer 
            variant="permanent" 
            anchor="left" 
            sx={{
                width: 240,
                flexShrink: 0,
                '& .MuiDrawer-paper': {
                    width: 240,
                    backgroundColor: 'var(--primary-color10)',
                    borderRight: '1px solid var(--primary-color30)',
                    boxShadow: 'none',
                    position: 'relative',
                    height: '100%'
                }
            }}
        >
            <List sx={{ padding: '1rem 0' }}>
                <ListItem 
                    button 
                    onClick={() => onSelect('ProfileUser')}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'var(--primary-color20)',
                        },
                        margin: '0.5rem 0',

                    }}
                >
                    <ListItemText 
                        primary="Profile" 
                        sx={{
                            color: 'var(--primary-color80)',
                            '& .MuiTypography-root': {
                                fontFamily: 'var(--font-family)',
                                fontSize: 'var(--font-size16)',
                                fontWeight: 'var(--font-weight-medium)'
                            }
                        }}
                    />
                </ListItem>
                <ListItem 
                    button 
                    onClick={() => onSelect('Product')}
                    sx={{
                        '&:hover': {
                            backgroundColor: 'var(--primary-color20)',
                        },
                        margin: '0.5rem 0',

                    }}
                >
                    <ListItemText 
                        primary="Product" 
                        sx={{
                            color: 'var(--primary-color80)',
                            '& .MuiTypography-root': {
                                fontFamily: 'var(--font-family)',
                                fontSize: 'var(--font-size16)',
                                fontWeight: 'var(--font-weight-medium)'
                            }
                        }}
                    />
                </ListItem>
            </List>
        </Drawer>
    )
}

const MyProfile = () => {
    const [selectedPanel, setSelectedPanel] = useState('ProfileUser')

    return (
        <div className={styles.root}>
            <div className={styles.container}>
                <SideBar onSelect={setSelectedPanel} />
                <div className={styles.contentWrapper}>
                    <div className={styles.panelContent}>
                        {selectedPanel === 'ProfileUser' && <ProfileUsers />}
                        {selectedPanel === 'Product' && <Products />}
                    </div>
                </div>
            </div>
        </div>
    )
}

export default MyProfile;