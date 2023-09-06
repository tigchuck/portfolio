import {useState, useEffect, React} from "react";
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Slide from '@mui/material/Slide';
import Grow from '@mui/material/Grow';
// import Fade from '@mui/material/Fade';



function FunName() {

    const [slide1, setSlide1] = useState(false);
    const [slide2, setSlide2] = useState(false);
    const [slide3, setSlide3] = useState(false);
    const [grow, setGrow] = useState(false);

    useEffect(() => {
        setGrow(true);
    }, [])

    return (
        <Grid 
            container
            flexDirection="column"
            spacing={6}
            sx={{
                // maxWidth: { xs: "0.8", md: "0.4" },
            }}
        >
            <Grid item>
                <Grid 
                    container 
                    direction="row"
                    spacing={3}
                >
                    <Grid item>
                        <Grow 
                            in={grow} 
                            timeout={{
                                enter: 2000,
                            }}
                            onEntered={() => {
                                setSlide1(true);
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Abel",
                                    fontSize: "64px",
                                    lineHeight: "48px",
                                    fontWeight: "900",
                                    lineWeight: "bold",
                                }}
                            >
                            
                                Hi, I'm
                            </Typography>
                        </Grow>

                    </Grid>
                    <Grid item>
                        <Grow 
                            in={grow} 
                            timeout={{
                                enter: 1000,
                            }}
                            onEntered={() => {
                                setSlide1(true);
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Abel",
                                    fontSize: "80px",
                                    lineHeight: "48px",
                                    fontWeight: "900",
                                    lineWeight: "extra-bold",
                                }}
                            >
                            
                                Charlie
                            </Typography>
                        </Grow>
                    </Grid>
                </Grid>
            </Grid>
            <Grid item>
                <Grid container direction="column" spacing={2}>
                    <Grid item>
                        <Slide
                            direction="right"
                            in={slide1}
                            timeout={{
                                enter: 1000,
                            }}
                            onEntered={() => {
                                setSlide2(true);
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Abel",
                                    fontSize: "32px",
                                    lineHeight: "48px",
                                    fontWeight: "900",
                                    lineWeight: "bold",
                                }}
                            >
                                I'm a graduate student at Georgia Tech pursuing an M.S. in Computer Science.
                            </Typography>
                        </Slide>
                    </Grid>
                    <Grid item>
                        <Slide
                            direction="right"
                            in={slide2} 
                            timeout={{
                                enter: 1000,
                            }}
                            onEntered={() => {
                                setSlide3(true);
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Abel",
                                    fontSize: "32px",
                                    lineHeight: "48px",
                                    fontWeight: "900",
                                    lineWeight: "bold",
                                }}
                            >
                                I have a B.S. in Biomedical Engineering from Ohio State.
                            </Typography>
                        </Slide>
                    </Grid>
                    <Grid item>
                        <Slide
                            direction="right"
                            in={slide3} 
                            timeout={{
                                enter: 1000,
                            }}
                        >
                            <Typography
                                sx={{
                                    fontFamily: "Abel",
                                    fontSize: "32px",
                                    lineHeight: "48px",
                                    fontWeight: "900",
                                    lineWeight: "bold",
                                }}
                            >
                                I'm an experienced Product Design Engineer and Product Manager.
                            </Typography>
                        </Slide>
                    </Grid>
                </Grid>
            </Grid>
        </Grid>
    );
}

export default FunName;

