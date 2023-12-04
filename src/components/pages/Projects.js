import React from 'react';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import Section from "../Section";
import hex from "../../pictures/Hex.png";
import reactLogo from "../../pictures/ReactLogo.png";
import stockMarket from "../../pictures/StockMarket.jpeg";

// We Are Testing
function Projects() {
  return (
    <Grid 
        container
        direction="column" 
        justifyContent="flex-start" 
        spacing={5}
    >
        <Grid 
            item                
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 1
            }}
        >
            <Section
                title="Stock Trading Q-Learner"
                subtitle="Technical Analysis Based Stock Trading Bot"
                img={stockMarket}
                alt="Stock Trading Q-Learner"
                imgBorderRadius="10px"
                imgWidth="0.8"
                infoList={[
                        ["Written in Python.", ""],
                        ["Numpy Library used to implement Q-Learner efficiently.", ""],
                        ["Pandas Library used to track and manage stock information.", ""],
                        ["Source code available to view upon request.", ""],
                ]}
                link="true"
                linkIcon=<GitHubIcon sx={{ mr: 2 }}/>
                linkText="Repo Access Reqeust"
                href="/contact"
            />
        </Grid>
        <Grid 
            item                
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 1
            }}
        >
            <Section
                title="This Website!"
                subtitle="A ReactJS Web App"
                img={reactLogo}
                alt="This Website"
                imgBorderRadius="10px"
                imgWidth="0.8"
                infoList={[
                        ["Written in Javascript, HTML, and CSS.", ""],
                        ["Used ReactJS framework along with the Material UI component library.", ""],
                        ["Uses the EmailJS library to securely send emails from the form on the Contact page.", ""],
                ]}
                link="true"
                linkIcon=<GitHubIcon sx={{ mr: 2 }}/>
                linkText="Repo"
                href="https://github.com/tigchuck/portfolio"
            />
        </Grid>
        <Grid 
            item                
            sx={{
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                width: 1
            }}
        >
            <Section
                title="The Game of Hex"
                subtitle="C++ Command Line Game"
                img={hex}
                alt="Hex Game"
                imgBorderRadius="10px"
                imgWidth="0.8"
                infoList={[
                        ["Written in C++.", ""],
                        ["The User is 'O', computer is 'X', and available spaces are '.'. Players alternate turns with the winner being the first player to form a connected path between opposite sides of the board.", ""],
                        ["Uses Monte Carlo simulation to determine computer's next move.", ""],
                ]}
                link="true"
                linkIcon=<GitHubIcon sx={{ mr: 2 }}/>
                linkText="Repo"
                href="https://github.com/tigchuck/hex"
            />
        </Grid>
    </Grid>
  );
}

export default Projects;