import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText'
import Box from '@mui/material/Box';

function MediaCard(props) {

    const infoList = props.infoList ? (
        <List>
            {props.infoList.map((infoItem) =>
            <ListItemText 
                primary={infoItem[0]} 
                secondary={infoItem[1]} 
                primaryTypographyProps={{
                    fontFamily: "Abel",
                    color: "#555555"
                }}
                secondaryTypographyProps={{
                    fontFamily: "Abel"
                }}
            />)}
        </List>
    ) : null;
    


    const leftButton = props.leftButton ? (
        <Button 
            variant="outlined" 
            size="small" 
            href={props.hrefLeft}
            sx={{
                fontFamily: "Abel",
                borderColor: "#555555",
                color: "#555555",
                '&:hover': {
                    borderColor: '#000',
                    color: '#000',
                    backgroundColor: "#ececec"
                },
            }}
        >
            {props.leftButtonTitle}
        </Button>
    ) : null;

    const rightButton = props.rightButton ? (
        <Button 
            variant="outlined" 
            size="small" 
            href={props.hrefRight}
            sx={{
                fontFamily: "Abel",
                borderColor: "#555555",
                color: "#555555",
                '&:hover': {
                    borderColor: '#000',
                    color: '#000',
                    backgroundColor: "#ececec"
                },
            }}
        >
            {props.rightButtonTitle}
        </Button>
    ) : null;

    return (
        <Card 
            elevation={10}
            sx={{ 
                height: 500,
                width: 350,
                minWidth: 350,
                borderRadius: "10px",
                backgroundColor: "#F7F4EA"
            }}
        >
            <CardMedia
                sx={{ height: 250 }}
                image={props.img}
                title="Transformer Bar"
            />
            <Box
                sx={{
                    height: 250,
                    display: "flex",
                    flexDirection: "column",
                    justifyContent: "space-between"
                }}
            >
                <CardContent
                    sx={{
                        padding: "auto"
                    }}
                >
                    <Typography 
                        gutterBottom 
                        sx={{
                            fontFamily: "Abel",
                            fontSize: "24px",
                            color: "#000",
                            fontWeight: "bold"
                        }}
                    >
                        {props.title}
                    </Typography>
                    <Typography 
                        gutterBottom 
                        sx={{
                            fontFamily: "Abel",
                            fontSize: "18px",
                            color: "#000",
                        }}
                    >
                        {props.subtitle}
                    </Typography>
                    {props.infoList ? infoList : null}
                </CardContent>
                <CardActions
                    sx={{
                        display: "flex",
                        flexDirection: "row",
                        padding: "0 16px 16px 16px",
                        justifyContent: "space-between"
                    }}
                >
                    {leftButton}
                    {rightButton}
                </CardActions>
            </Box>
        </Card>
    );
}

export default MediaCard;