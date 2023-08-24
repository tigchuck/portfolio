import { useState, React } from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Fab from '@mui/material/Fab';


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

    const [values, setValues] = useState({
        email: "",
        subject: "",
        message: ""
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        alert("Form Submitted");
    }

    const handleChange = (e) => {
        const name = e.target.id;
        const value = e.target.value;
        setValues({...values, [name]: value});
    }

    return (
        <form
            onSubmit={handleSubmit}
        >
            <Box
            sx={{
                width: 500,
                maxWidth: "100%",
            }}
            >
                {inputFieldValues.map((inputFieldValue) => {
                    return (
                        <TextField 
                            onChange={handleChange}
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
    );
}

export default Contact;


// import { useState } from "react";

// const PostContactForm = async (
//   values: any,
//   successCallback: any,
//   errorCallback: any
// ) => {
//   // do stuff
//   // if successful
//   if (true) successCallback();
//   else errorCallback();
// };

// const initialFormValues = {
//   fullName: "",
//   email: "",
//   message: "",
//   formSubmitted: false,
//   success: false
// };

// export const useFormControls = () => {
//   const [values, setValues] = useState(initialFormValues);
//   const [errors, setErrors] = useState({} as any);

//   const validate: any = (fieldValues = values) => {
//     let temp: any = { ...errors };

//     if ("fullName" in fieldValues)
//       temp.fullName = fieldValues.fullName ? "" : "This field is required.";

//     if ("email" in fieldValues) {
//       temp.email = fieldValues.email ? "" : "This field is required.";
//       if (fieldValues.email)
//         temp.email = /^[^@\s]+@[^@\s]+\.[^@\s]+$/.test(fieldValues.email)
//           ? ""
//           : "Email is not valid.";
//     }

//     if ("message" in fieldValues)
//       temp.message =
//         fieldValues.message.length !== 0 ? "" : "This field is required.";

//     setErrors({
//       ...temp
//     });
//   };

//   const handleInputValue = (e: any) => {
//     const { name, value } = e.target;
//     setValues({
//       ...values,
//       [name]: value
//     });
//     validate({ [name]: value });
//   };

//   const handleSuccess = () => {
//     setValues({
//       ...initialFormValues,
//       formSubmitted: true,
//       success: true
//     });
//   };

//   const handleError = () => {
//     setValues({
//       ...initialFormValues,
//       formSubmitted: true,
//       success: false
//     });
//   };

//   const formIsValid = (fieldValues = values) => {
//     const isValid =
//       fieldValues.fullName &&
//       fieldValues.email &&
//       fieldValues.message &&
//       Object.values(errors).every((x) => x === "");

//     return isValid;
//   };

//   const handleFormSubmit = async (e: any) => {
//     e.preventDefault();
//     const isValid =
//       Object.values(errors).every((x) => x === "") && formIsValid();
//     if (isValid) {
//       await PostContactForm(values, handleSuccess, handleError);
//     }
//   };

//   return {
//     values,
//     errors,
//     handleInputValue,
//     handleFormSubmit,
//     formIsValid
//   };
// };
// //////////////////////////....////////////////////////////
// import { Button, TextField } from "@material-ui/core";
// import React from "react";
// import { useFormControls } from "./ContactFormControls";

// const inputFieldValues = [
//   {
//     name: "fullName",
//     label: "Full Name",
//     id: "my-name"
//   },
//   {
//     name: "email",
//     label: "Email",
//     id: "my-email"
//   },
//   {
//     name: "message",
//     label: "Message",
//     id: "my-message",
//     multiline: true,
//     rows: 10
//   }
// ];

// export const ContactForm = () => {
//   const {
//     handleInputValue,
//     handleFormSubmit,
//     formIsValid,
//     errors
//   } = useFormControls();

//   return (
//     <form autoComplete="off" onSubmit={handleFormSubmit}>
//       {inputFieldValues.map((inputFieldValue, index) => {
//         return (
//           <TextField
//             key={index}
//             onChange={handleInputValue}
//             onBlur={handleInputValue}
//             name={inputFieldValue.name}
//             label={inputFieldValue.label}
//             error={errors[inputFieldValue.name]}
//             multiline={inputFieldValue.multiline ?? false}
//             fullWidth
//             rows={inputFieldValue.rows ?? 1}
//             autoComplete="none"
//             {...(errors[inputFieldValue.name] && {
//               error: true,
//               helperText: errors[inputFieldValue.name]
//             })}
//           />
//         );
//       })}
//       <Button
//         variant="contained"
//         type="submit"
//         color="secondary"
//         disabled={!formIsValid()}
//       >
//         Send Message
//       </Button>
//     </form>
//   );
// };
