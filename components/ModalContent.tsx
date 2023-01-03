import React, { Dispatch, SetStateAction } from "react";
import { Divider, Box } from "@mui/material";
import { palette, inline } from "../styles/index";

interface ModalContentProps {
  modalId: string;
  isActiveUser: boolean;
  setModalId: Dispatch<SetStateAction<string>>;
  setIsActiveUser: Dispatch<SetStateAction<boolean>>;
}

export const ModalContent = ({
  modalId,
  isActiveUser,
  setModalId,
  setIsActiveUser,
}: ModalContentProps) => {
  return (
    <Box
      sx={{
        ...inline.modalFontSx,
        ...inline.modalBoxStyling,
      }}
    >
      <Box
        sx={{
          ...inline.logoSx,
          color: palette._blue,
          fontSize: "3vw",
          mb: "0.25vw",
        }}
      >
        ꜵ
      </Box>
      <Divider variant="middle" sx={{ color: palette._darkgrey }} />
      <Box sx={{ mt: "5vh" }}>
        {`${modalId}`}
        {/* {(prompt === "New" && <NewModalContent />) ||
          (prompt === "Load" && <LoadModalContent />) ||
          (prompt === "About" && <AboutModalContent />) ||
          (prompt === "Contact" && <ContactModalContent />) ||
          (prompt === "Nav" && <NavAboutContent />) ||
          (prompt === "Menu" && <NavMenuContent />) ||
          (prompt === "Login" && (
            <LoginModalContent
              activeUser={activeUser}
              setActiveUser={setActiveUser}
              setModalType={setModalType}
            />
          ))} */}
      </Box>
    </Box>
  );
};
