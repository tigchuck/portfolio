import {useState, useEffect, React} from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
import Fade from '@mui/material/Fade';



function FunName() {

    const [slide, setSlide] = useState(false);
    const [grow, setGrow] = useState(false);
    const [fade, setFade] = useState(false);

    useEffect(() => {
        setFade(true);
    }, [])

    return (
        <Grid container>
            <Fade 
                in={fade} 
                timeout={{
                    enter: 1000,
                }}
                onEntered={() => {
                    setSlide(true);
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "Abel",
                        fontSize: "32px",
                        lineHeight: "48px",
                        fontWeight: "900",
                        '&:hover': {
                            textShadow: "0px 0px 5px red"
                        },
                    }}
                >
                
                    Hi, I'm 
                </Typography>
            </Fade>
            <Slide
                direction="down"
                in={slide}
                timeout={{
                    enter: 1000,
                }}
                onEntered={() => {
                    setGrow(true);
                }}
            >
                <Typography
                    sx={{
                        fontFamily: "Abel",
                        fontSize: "32px",
                        lineHeight: "48px",
                        fontWeight: "900",
                        '&:hover': {
                            textShadow: "0px 0px 5px red"
                        },
                    }}
                >
                    Charlie
                </Typography>
            </Slide>
            <Grow
                in={grow} 
                timeout={{
                    enter: 1000,
                }}
            >
                <Typography>
                    I'm a graduate student at Georgia Tech pursuing an M.S. in Computer Science. I have a B.S. in Biomedical Engineering from Ohio State and am an experienced Product Design Engineer and Product Manager.
                </Typography>
            </Grow>
        </Grid>
    );
}

export default FunName;

