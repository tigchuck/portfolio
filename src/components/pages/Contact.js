import { useState, React } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import emailjs from '@emailjs/browser';


const inputFieldValues = [
    {
        label: "Your Email", 
        id: "email",
        required: "true",
        autoFocus: "true", 

    },
    {
        label: "Subject", 
        id: "subject", 
        fullWidth: "true",
    },
    {
        label: "Message", 
        id: "message",
        required: "true",
        multiline: "true", 
        rows: "8",
    }
];


function Contact() {

    const sendEmail = (e) => {
        // e.preventDefault();
        const serviceID = "service_dekc48b";
        const templateID = "template_4yxmtln";
        const publicKey = "kFeAhyG8YASUYFeFG";

      emailjs.send(serviceID, templateID, {subject: values.subject, email: values.email, message: values.message}, publicKey)
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };

    const [values, setValues] = useState({
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e) => {
        // e.preventDefault();
        sendEmail(e);
        alert("Form Submitted");
    }

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setValues({...values, [name]: value});
    }

    return (
        <Grid 
            container
            flexDirection="column"
            spacing={5}
            paddingTop="32px"
            alignItems="center"
        >
            <Grid item>
                <Typography
                    sx={{
                        fontFamily: "Abel",
                        fontSize: "32px",
                        lineHeight: "64px",
                        fontWeight: "900",
                        lineWeight: "bold",
                        textAlign: "center"
                    }}
                >
                    For questions about my background or hiring inquiries, 
                </Typography>
                <Typography
                    sx={{
                        fontFamily: "Abel",
                        fontSize: "32px",
                        lineHeight: "64px",
                        fontWeight: "900",
                        lineWeight: "bold",
                        textAlign: "center",
                    }}
                >
                    please reach out to me using the form below.
                </Typography>
            </Grid>
            <Grid item>
                <form
                    onSubmit={(event) => handleSubmit(event)}
                    style={{
                        backgroundColor: "#F7F4EA"
                    }}
                >
                    <Box
                        sx={{
                            width: 500,
                            maxWidth: "100%",
                            backgroundColor: "#F7F4EA"
                        }}
                    >
                        {inputFieldValues.map((inputFieldValue) => {
                            return (
                                <TextField 
                                    onChange={(event) => handleChange(event)}
                                    fullWidth
                                    margin="normal"
                                    required={inputFieldValue.required ?? false}
                                    multiline={inputFieldValue.multiline ?? false}
                                    rows={inputFieldValue.rows ?? 1} 
                                    label={inputFieldValue.label}
                                    id={inputFieldValue.id}
                                    value={
                                        inputFieldValue.id === "message" ? values.message :
                                            inputFieldValue.id === "email" ? values.email :
                                            values.subject
                                    }
                                />
                            );
                        })}
                        <Fab
                            type="submit"
                            variant="extended"
                            sx={{
                                fontFamily: "Abel",
                                fontSize: "16px",
                                margin: "32px auto",
                                display: "flex",
                                width: "0.25"
                                }}
                        >
                            Submit
                        </Fab>
                    </Box>
                </form>
            </Grid>
        </Grid>
    );
}

export default Contact;