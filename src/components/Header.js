import React from 'react';
import AppBar from '@mui/material/AppBar';
import Grid from '@mui/material/Grid';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import '../styles/Header.css';


const tabs = ['Experience', 'Education', 'Projects', 'Contact'];

function Header() {

    // const [anchorElNav, setAnchorElNav] = React.useState(null);
    
    // const handleOpenNavMenu = (event) => {
    //     setAnchorElNav(event.currentTarget);
    //   };
    
    //   const handleCloseNavMenu = () => {
    //     setAnchorElNav(null);
    //   };

    return (
        <AppBar position="fixed" className="appBar" sx={{backgroundColor: "#1d2951"}}>  
            <Grid container alignItems="center" justifyContent="center">
                <Grid item xs={6}>
                    <Toolbar className="toolbar">
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