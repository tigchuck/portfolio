import React from 'react';
import Grid from '@mui/material/Grid';
import MediaCard from "../MediaCard";
import colorado from "../../pictures/Colorado.png";
import ucsc from "../../pictures/UCSC.png";
import huj from "../../pictures/HUJ.png";
import ucsd from "../../pictures/UCSD.jpeg";
import imperialCollege from "../../pictures/ImperialCollege.jpeg";
import gt from "../../pictures/GeorgiaTech.png";

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
                    title="Data Structures and Algorithms"
                    subtitle="Georgia Institute of Technology"
                    img={gt}
                    alt="Georgia Tech"
                    imgBorderRadius="10px"
                    padding="16px"
                    leftButton="true"
                    leftButtonTitle="Certificate"
                    hrefLeft="https://credentials.edx.org/credentials/77155e3c63d344ae821ccb233375cdaf/"
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
                    title="Introduction to Object-Oriented Programming with Java"
                    subtitle="Georgia Institure of Technology"
                    img={gt}
                    alt="Georgia Tech"
                    imgBorderRadius="10px"
                    padding="16px"
                    leftButton="true"
                    leftButtonTitle="Certificate"
                    hrefLeft="https://credentials.edx.org/credentials/3ad10aee12834f1a9c24c634530896db/"
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
                    title="Introduction to Python Programming"
                    subtitle="Georgia Institure of Technology"
                    img={gt}
                    alt="Georgia Tech"
                    imgBorderRadius="10px"
                    padding="16px"
                    leftButton="true"
                    leftButtonTitle="Certificate"
                    hrefLeft="https://credentials.edx.org/credentials/6f63b9d0d2c345df97f1bd976c0ab6f7/"
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
                    title="Databases for Data Scientists"
                    subtitle="University of Colorado Boulder"
                    img={colorado}
                    alt="Colorado"
                    imgBorderRadius="10px"
                    padding="16px"
                    leftButton="true"
                    leftButtonTitle="Certificate"
                    hrefLeft="https://www.coursera.org/account/accomplishments/specialization/certificate/P9ABSGKBZ7PE"
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
                    leftButton="true"
                    leftButtonTitle="Certificate"
                    hrefLeft="https://www.coursera.org/account/accomplishments/specialization/certificate/MWXVGTURJXFY
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
                    leftButton="true"
                    leftButtonTitle="Certificate"
                    hrefLeft="https://www.coursera.org/account/accomplishments/certificate/6CLYMPYQGUFY"
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
                    leftButton="true"
                    leftButtonTitle="Certificate"
                    hrefLeft="https://www.coursera.org/account/accomplishments/specialization/certificate/3G5FNXFCGNRD"
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
                    leftButton="true"
                    leftButtonTitle="Certificate"
                    hrefLeft="https://www.coursera.org/account/accomplishments/specialization/certificate/WWG7U4XM24TE"
                />
            </Grid>
        </Grid>
    );
}

export default OnlineCourseCertificates;