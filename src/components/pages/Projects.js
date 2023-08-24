import React from 'react';
import Grid from '@mui/material/Grid';
import GitHubIcon from '@mui/icons-material/GitHub';
import Section from "../Section";
import hex from "../../pictures/Hex.png";


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