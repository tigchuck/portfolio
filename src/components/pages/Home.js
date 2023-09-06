import React from 'react';
import Grid from '@mui/material/Grid';
import IconButton from '@mui/material/IconButton';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import Fab from '@mui/material/Fab';
import FunName from "../FunName";
import charlie from "../../pictures/CharliePicture.jpeg";


function Home() {
    return (
        <Grid
            container
            flexDirection="column"
        >
            <Grid item>
                <Grid
                    container
                    flexDirection="row"
                    justifyContent="space-around"
                    alignItems="center"
                    sx={{
                        padding: "50px"
                    }}
                >
                    <Grid item>
                        <FunName />
                    </Grid>
                    <Grid item sx={{borderRadius: "25px"}}>
                        <Paper img={charlie} elevation={10} sx={{borderRadius: "50%"}}>
                            <CardMedia component="img" image={charlie} sx={{borderRadius: "50%"}} />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid 
                    contianer
                    flexDirection="column"
                >
                    <Grid item>
                        <Fab
                            variant="extended"
                            href="/contact"
                            sx={{
                                fontFamily: "Abel",
                                fontSize: "16px",
                                margin: "32px auto",
                                display: "flex",
                                width: "0.25",
                                minWidth: "250px"
                            }}
                        >
                            Contact Me!
                        </Fab>
                    </Grid>
                    <Grid item>
                        <Grid container flexDirection="row">
                            <Grid item>
                                <IconButton href="https://github.com/tigchuck">
                                    <GitHubIcon 
                                        fontSize="large" 
                                    />
                                </IconButton>
                            </Grid>
                            <Grid item>
                                <IconButton href="https://www.linkedin.com/in/charlie-tighe-2b0062136/">
                                    <LinkedInIcon 
                                        fontSize="large" 
                                    />
                                </IconButton>
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;