import React, { useState, useRef, useEffect } from "react";
import { TextField, IconButton, Box, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { inline, palette } from "../../styles";
import emailjs from "@emailjs/browser";

interface ContactContentProps {
  handleCloseModal(): any;
}

interface EmailTemplate {
  user_name: string;
  user_email: string;
  message: string;
}

export const ContactContent = ({ handleCloseModal }: ContactContentProps) => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>();
  const [formIsLoading, setFormIsLoading] = useState<boolean>(false);
  const nameField = useRef<HTMLInputElement>();
  const emailField = useRef<HTMLInputElement>();
  const messageField = useRef<HTMLInputElement>();

  useEffect(() => {
    if (formData) {
      setFormIsLoading(true);
      handleCloseModal();

      emailjs.send(
        "contact_service",
        "contact_form",
        formData,
        "wZOXfbUhw_VKyHKpd"
      );
    }
  }, [formData]);

  useEffect(() => {
    setTimeout(() => {
      if (formIsLoading) {
        setFormIsLoading(false);
      }
    }, 2250);
  }, [formIsLoading]);

  return (
    <Box sx={inline.modalCenteredSx}>
      <TextField
        placeholder="Name"
        inputRef={nameField}
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
      />
      <TextField
        placeholder="Email Address"
        inputRef={emailField}
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
      />
      <TextField
        placeholder="Message"
        inputRef={messageField}
        variant="standard"
        margin="normal"
        sx={{ width: "28vw" }}
      />
      <IconButton
        disableRipple
        sx={{ cursor: "default" }}
        onClick={() => {
          if (
            nameField.current.value &&
            emailField.current.value &&
            messageField.current.value
          ) {
            setFormData({
              name: nameField.current.value,
              email: emailField.current.value,
              message: messageField.current.value,
            });
          }
        }}
      >
        <CircularProgress
          size="2.33vw"
          sx={{
            ...inline.circularProgressSx,
            color: formIsLoading === true ? palette._blue : palette._grey,
          }}
        />
        <SendIcon
          sx={{
            mt: "1vh",
          }}
        />
      </IconButton>
    </Box>
  );
};
