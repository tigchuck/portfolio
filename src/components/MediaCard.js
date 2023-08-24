import React from 'react';
import Card from '@mui/material/Card';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import List from '@mui/material/List';
import ListItemText from '@mui/material/ListItemText'

function MediaCard(props) {

    const infoList = props.infoList.map((infoItem) =>
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
        />
    );

    const siteButton = props.site ? (
        <Button 
            variant="outlined" 
            size="small" 
            href={props.hrefSite}
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
            Webpage
        </Button>
    ) : null;

    const patentButton = props.patent ? (
        <Button 
            variant="outlined" 
            size="small" 
            href={props.hrefPatent}
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
            Patent
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
            <CardContent>
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
                <List>
                    {infoList}
                </List>
            </CardContent>
            <CardActions
                sx={{
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "end",
                    padding: "10px 25px 0 25px"
                }}

            >
                {siteButton}
                {patentButton}
            </CardActions>
        </Card>
    );
}

export default MediaCard;