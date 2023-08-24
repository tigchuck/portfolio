import React from 'react';
import Box from '@mui/system/Box';
import Grid from '@mui/material/Grid';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import Fab from '@mui/material/Fab';

function Section(props) {
    const infoList = props.infoList.map((infoItem) =>
        <ListItemText 
            primary={infoItem[0]} 
            secondary={infoItem[1]} 
            primaryTypographyProps={{
                fontFamily: "Abel"
            }}
            secondaryTypographyProps={{
                fontFamily: "Abel"
            }}
            sx={{
                margin: "16px 0 16px 0"
            }}
        />
    );

    const linkButton = props.link ? (
        <Fab
            variant="extended"
            href={props.href}
            sx={{
                fontFamily: "Abel",
                fontSize: "16px",
                margin: "32px auto",
                display: "flex",
                width: "0.25",
                minWidth: "250px"
            }}
        >
            {props.linkIcon}{props.linkText}
        </Fab>
    ) : null;

    return (
        <Paper 
            variant="elevation" 
            elevation={10} 
            sx={{
                backgroundColor: "#F7F4EA", 
                borderRadius: "10px",
                width: 0.8,
                margin: "auto",
            }} 
        >
            <Grid 
                container 
                alignItems="center" 
                justifyContent="space-around"
                sx={{
                    flexDirection: {xs: "column", md: "row"}
                }}
            >
                <Grid 
                    item 
                    md={4}
                    sx={{
                        padding: {xs: "25px 0 0 0", md: "0"},
                    }}
                >
                    <Box
                        component="img"
                        sx={{
                            width: props.imgWidth || 0.5,
                            maxWidth: { xs: 200, s: 250, md: 350 },
                            maxHeight: 350,
                            borderRadius: props.imgBorderRadius || 0,
                            display: "flex",
                            margin: "auto"
                        }}
                        src={props.img} 
                        alt={props.alt}
                    />
                </Grid>
                <Grid 
                    item 
                    md={8} 
                    sx={{
                        padding: "25px"
                    }}
                >
                    <Typography 
                        component="h1" 
                        sx={{
                            fontFamily: "Abel",
                            fontSize: "32px",
                            lineHeight: "48px",
                            fontWeight: "900",
                            textAlign: "center"
                        }}
                    >
                        {props.title}
                    </Typography>
                    <Typography 
                        component="h3" 
                        className="subtitle"
                        sx={{
                            fontFamily: "Abel",
                            fontSize: "28px",
                            lineHeight: "48px",
                            textAlign: "center"
                        }}
                    >
                        {props.subtitle}
                    </Typography>
                    <List>
                        {infoList}
                    </List>
                    {linkButton}
                </Grid>
            </Grid>
        </Paper>
    );

}

export default Section;