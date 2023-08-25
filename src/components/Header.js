import { useState, React } from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import IconButton from "@mui/material/IconButton";
import Box from '@mui/material/Box';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemButton from '@mui/material/ListItemButton';
import ListItemText from '@mui/material/ListItemText';
import MenuIcon from '@mui/icons-material/Menu';
import Drawer from '@mui/material/Drawer';
import '../styles/Header.css';


const tabs = ['Experience', 'Education', 'Projects', 'Contact'];

function Header() {

    const [state, setState] = useState(false);

    const toggleDrawer = open => () => {
        setState(open);
    };

    const list = (
        <Box
            sx={{ width: 250 }}
            role="presentation"
            onClick={toggleDrawer(false)}
            // onKeyDown={toggleDrawer(anchor, false)}
        >
            <List>
                {tabs.map((tab) => (
                    <ListItem 
                        component="a"
                        href={"/" + tab.toLowerCase()}
                        key={tab} 
                        disablePadding
                    >
                        <ListItemButton>
                            <ListItemText primary={tab} />
                        </ListItemButton>
                    </ListItem>
                ))}
            </List>
        </Box>
    );

    return (
        <AppBar position="fixed" className="appBar" sx={{backgroundColor: "#1d2951"}}>  
            <Grid container alignItems="center" justifyContent="center">
                <Grid 
                    item 
                    xs={6}
                    sx={{ 
                        flexGrow: 1, 
                        display: { xs: 'flex', md: 'none' } 
                    }}
                >
                    <IconButton
                    size="large"
                    aria-label="account of current user"
                    aria-controls="menu-appbar"
                    aria-haspopup="true"
                    onClick={toggleDrawer(true)}
                    color="inherit"
                    >
                        <MenuIcon />
                    </IconButton>
                    <Drawer
                        anchor="left"
                        open={state}
                        onClose={toggleDrawer(false)}
                    >
                        {list}
                    </Drawer>
                </Grid>
                <Grid item xs={6} sx={{display: { xs: 'none', md: 'flex' }}}>
                    <Toolbar>
                        {tabs.map((tab) => (
                                <Typography 
                                    variant="h3"
                                    component="a"
                                    href={"/" + tab.toLowerCase()}
                                >
                                    {tab}
                                </Typography>
                        ))}
                    </Toolbar>
                </Grid>
                <Grid item xs={6}>
                    <Typography 
                        variant="h1"
                        component="a"
                        href="/" 
                        className="logo"
                    >
                        Charlie Tighe
                    </Typography>
                </Grid>
            </Grid>  
        </AppBar>
    );
}

export default Header;