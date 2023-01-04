import React, { useState, useRef, useEffect } from "react";
import { TextField, IconButton, Box, CircularProgress } from "@mui/material";
import SendIcon from "@mui/icons-material/Send";
import { inline, palette } from "../../styles";

export const ContactContent = () => {
  const [formData, setFormData] = useState<{
    name: string;
    email: string;
    message: string;
  }>({
    name: "",
    email: "",
    message: "",
  });
  const [formIsLoading, setFormIsLoading] = useState<boolean>(false);
  const nameField = useRef<HTMLInputElement>(null);
  const emailField = useRef<HTMLInputElement>(null);
  const messageField = useRef<HTMLInputElement>(null);

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
        onClick={() =>
          setFormData({
            name: nameField?.current?.value!,
            email: emailField?.current?.value!,
            message: messageField?.current?.value!,
          })
        }
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
