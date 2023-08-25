import React from 'react';
import Grid from '@mui/material/Grid';
import MediaCard from "../MediaCard";
import colorado from "../../pictures/Colorado.png";
import ucsc from "../../pictures/UCSC.png";
import huj from "../../pictures/HUJ.png";
import ucsd from "../../pictures/UCSD.jpeg";
import imperialCollege from "../../pictures/ImperialCollege.jpeg";

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
                    title="Building a Computer from First Principles"
                    subtitle="Hebrew University of Jerusalem"
                    img={huj}
                    alt="HUJ"
                    imgBorderRadius="10px"
                    padding="16px"
                    infoList={[
                            [""]
                    ]}
                    site="true"
                    hrefSite="https://www.coursera.org/account/accomplishments/certificate/6CLYMPYQGUFY"
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
                    title="Introduction to Discrete Mathematics for Computer Science"
                    subtitle="University of California San Diego"
                    img={ucsd}
                    alt="UCSD"
                    imgBorderRadius="10px"
                    padding="16px"
                    infoList={[
                            [""]
                    ]}
                    site="true"
                    hrefSite="https://www.coursera.org/account/accomplishments/specialization/certificate/3G5FNXFCGNRD"
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
                    title="Mathematic for Machine Learning"
                    subtitle="Imperial College London"
                    img={imperialCollege}
                    alt="Imperial College London"
                    imgBorderRadius="10px"
                    padding="16px"
                    infoList={[
                            [""]
                    ]}
                    site="true"
                    hrefSite="https://www.coursera.org/account/accomplishments/specialization/certificate/WWG7U4XM24TE"
                />
            </Grid>
        </Grid>
    );
}

export default OnlineCourseCertificates;