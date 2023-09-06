import Fab from '@mui/material/Fab';

function Button(props) {

    return (
        <Fab
            variant={props.variant || "extended"}
            href={props.href}
            elevation={0}
            sx={{
                fontFamily: "Abel",
                fontSize: props.fontSize || "16px",
                margin: "32px auto",
                display: "flex",
                width: props.width || "0.25",
                minWidth: props.minWidth,
                height: props.height,
                color: props.color,
                backgroundColor: props.backgroundColor,
                aspectRatio: props.aspectRatio,
                boxShadow: props.elevation,
                '&:hover': {
                    color: props.hoverColor,
                    backgroundColor: props.hoverBackgroundColor
                },
            }}
            >
                {props.linkIcon}{props.linkText}
            </Fab>
    );
}

export default Button;