import React from 'react';
import Grid from '@mui/material/Grid';
import MediaCard from "../MediaCard";
import colorado from "../../pictures/Colorado.png";
import ucsc from "../../pictures/UCSC.png";

function OnlineCourseCertificates() {
    return (
        <Grid 
            container
            direction="row" 
            justifyContent="space-between" 
            spacing={5}
        >
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Databases for Data Scientists"
                    subtitle="University of Colorado Boulder"
                    img={colorado}
                    alt="Colorado"
                    imgBorderRadius="10px"
                    padding="16px"
                    infoList={[
                            [""]
                    ]}
                    site="true"
                    hrefSite="https://www.roguefitness.com/rogue-kabuki-transformer-bar"
                />
            </Grid>
            <Grid 
                item                
                sx={{
                    display: "flex",
                    alignItems: "center",
                    justifyContent: "center",
                }}
                xs={12}
                md={6}
                lg={4}
                xl={3}
            >
                <MediaCard
                    title="Coding for Everyone: C and C++"
                    subtitle="University of California, Santa Cruz"
                    img={ucsc}
                    alt="UCSC"
                    imgBorderRadius="10px"
                    padding="16px"
                    infoList={[
                            [""]
                    ]}
                    site="true"
                    hrefSite="https://www.coursera.org/account/accomplishments/specialization/certificate/MWXVGTURJXFY
"
                />
            </Grid>
        </Grid>
    );
}

export default OnlineCourseCertificates;