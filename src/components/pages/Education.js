import React from 'react';
import Grid from '@mui/material/Grid';
import Section from "../Section";
import gt from '../../pictures/GeorgiaTech.png';
import osu from '../../pictures/OhioState.png';
import onlineCourses from "../../pictures/OnlineCourses.jpeg";

function Education() {
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
                    title="Georgia Institute of Technology"
                    subtitle="M.S. Computer Science"
                    img={gt}
                    alt="Georgia Tech"
                    imgWidth="0.8"
                    infoList={[
                            ["Expected Graduation: May 2025", ""],
                            ["GPA: 4.0"],
                            ["Class Highlights", "Graduate Introduction to Operating Systems, Machine Learning for Trading, Bio-Inspired Computing, Knowledge Representation and Reasoning"]
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
                    title="Ohio State University"
                    subtitle="B.S. Biomedical Engineering"
                    img={osu}
                    alt="Ohio State"
                    imgWidth="0.8"
                    infoList={[
                            ["Graduated: 2019"],
                            ["GPA: 3.4"],
                            ["Class Highlights", "Calculus, Organic Chemistry, Biomechanics, Biochemistry, Quantitative Physiology, Programming C++, Product Design Engineering"]
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
                    title="Online Courses"
                    img={onlineCourses}
                    alt="Online Courses"
                    imgBorderRadius="10px"
                    imgWidth="0.8"
                    infoList={[
                            ["Created my own pseudo computer science cirriculum using several of online learning platforms.", ""],
                            ["Learned several programming languages, frameworks, and completed a variety of projects as part of coursework.", ""],
                            ["Used this collection of knowledge and skills to aid in admission to the M.S. in Computer Science program at Georgia Tech, where I am now enrolled as a student.", ""]
                    ]}
                    link="true"
                    linkText="View Certificates"
                    href="/online-course-certificates"
                />
            </Grid>
        </Grid>
    );
}

export default Education;