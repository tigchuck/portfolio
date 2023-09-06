import React from 'react';
import Grid from '@mui/material/Grid';
import Section from "../Section";
import rogue from "../../pictures/Rogue.jpeg";
import cc from "../../pictures/CrookedCan.png";
import cdme from "../../pictures/CDME.jpeg";

function Experience() {
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
                title="Rogue Fitness"
                subtitle="Product Design Engineer"
                img={rogue}
                alt="Rogue Fitness"
                imgBorderRadius="10px"
                imgWidth="0.8"
                infoList={[
                        ["Designed and managed products from inception through launch and early sales.", ""],
                        ["Actively collaborated with the owner/CEO, Director of Product Development, and other engineers to solve challenging design problems.", ""],
                        ["Considered several factors, such as product function, cost, manufacturability, design aesthetics, speed of product packaging, ease of customer assembly, etc., in order to design well-received products.", ""],
                        ["Inventor on several granted and pending design and utility patents", ""]
                ]}
                link="true"
                linkText="View Projects"
                href="/portfolio/rogue-fitness"
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
                title="Crooked Can"
                subtitle="Bartender"
                img={cc}
                alt="Crooked Can"
                imgWidth="0.4"
                infoList={[
                    ["Demonstrated exceptional customer service skills by engaging with customers, building rapport, and upselling craft beers and specialty drinks.", ""],
                    ["Utilized extensive product knowledge to educate customers about the new and existing offerings, enhancing their overall experience and encouraging repeat business.", ""],
                    ["Work and communicate effectively with other bartenders to help serve customers efficiently, while maintaining a safe and clean working environment.", ""]
                ]}
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
                title="Center for Design and Manufacturing Excellence"
                subtitle="Undergraduate Engineering Assistant"
                img={cdme}
                alt="CDME"
                imgBorderRadius="10px"
                infoList={[
                        ["Assisted in research of electromagnetic compression of metal tubes, aiming to create a better-functioning barbell and a more inexpensive production method.", ""],
                        ["Designed multiple parts for testing using Solidworks, including field shapers for testing different-sized tubes, grooved rods for increased joint strength, and plugs for centering the rods within the tubes.", ""]
                ]}
            />  
        </Grid>
    </Grid>
  );
}

export default Experience;