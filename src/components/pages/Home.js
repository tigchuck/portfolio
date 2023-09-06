import React from 'react';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import CardMedia from '@mui/material/CardMedia';
import Paper from '@mui/material/Paper';
import FunName from "../FunName";
import Button from "../Button";
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
                    flexDirection={{xs: "column", lg: "row"}}
                    spacing={5}
                    justifyContent="space-around"
                    alignItems="center"
                    sx={{
                        padding: "50px"
                    }}
                >
                    <Grid 
                        item
                        sx={{
                            width: {xs: '100%', lg: '70%'}
                        }}
                    >
                        <FunName />
                    </Grid>
                    <Grid 
                        item 
                        sx={{
                            display: {xs: 'none', lg: 'flex'},
                            width: "30%",
                            borderRadius: "25px"
                        }}
                    >
                        <Paper 
                            img={charlie} 
                            elevation={10} 
                            sx={{
                                display: {xs: 'none', lg: 'flex'},
                                borderRadius: "50%"
                                }}
                            >
                            <CardMedia component="img" image={charlie} sx={{borderRadius: "50%"}} />
                        </Paper>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid 
                    contianer
                    flexDirection="column"
                    paddingTop="64px"
                >
                    <Grid item>
                        <Button 
                            linkText="Contact Me!"
                            href="/contact"
                            elevation="5"
                            backgroundColor="#1d2951"
                            color="#F0EAD6"
                            hoverBackgroundColor="#2a3c77"
                            minWidth="250px"
                        />
                    </Grid>
                    <Grid item>
                        <Grid 
                            container 
                            flexDirection="row"
                            justifyContent="center"
                            alignItems="center"
                            spacing={10}
                        >
                            <Grid item>
                                <Button 
                                    variant="circular"
                                    linkIcon={<GitHubIcon fontSize="large"/>}
                                    href="https://github.com/tigchuck"
                                    elevation="0"
                                    backgroundColor="#F0EAD6"
                                    hoverBackgroundColor="#F0EAD6"
                                    color="#1d2951"
                                    hoverColor="#2a3c77"
                                    height="75px"
                                    width="100%"
                                    aspectRatio="1.0"
                                />
                            </Grid>
                            <Grid item>
                                <Button 
                                    variant="circular"
                                    linkIcon={<LinkedInIcon fontSize="large"/>}
                                    href="https://www.linkedin.com/in/charlie-tighe-2b0062136/"
                                    elevation="0"
                                    backgroundColor="#F0EAD6"
                                    hoverBackgroundColor="#F0EAD6"
                                    color="#1d2951"
                                    hoverColor="#2a3c77"
                                    height="75px"
                                    width="100%"
                                    aspectRatio="1.0"
                                />
                            </Grid>
                        </Grid>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default Home;