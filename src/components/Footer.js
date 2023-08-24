import React from 'react';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import "../styles/Footer.css";

function Footer() {

    const currentYear = new Date().getFullYear();

    return (
        <Grid container alignItems="center" justifyContent="center" className="footer">
            <Grid item>
                <Typography paragraph="true">Copyright © {currentYear}</Typography>
            </Grid>
        </Grid>
    );
}

export default Footer;