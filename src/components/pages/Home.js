import React from 'react';
import Grid from '@mui/material/Grid';
// import Typography from '@mui/material/Typography';
// import Paper from '@mui/material/Paper';
import FunName from "../FunName";


function Home() {
    return (
        <Grid
            container
            flexDirection="row"
            justifyContent="space-around"
        >
            <Grid item>
                <FunName />
            </Grid>
            <Grid item>Also Home</Grid>
        </Grid>
    );
}

export default Home;