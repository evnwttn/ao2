import React, { Dispatch, SetStateAction } from "react";
import { Divider, Box } from "@mui/material";
import { palette, inline } from "../styles/index";
import {
  AboutContent,
  ContactContent,
  HelpContent,
  NewContent,
  LoadContent,
} from "./modals";
import { Session } from "../types";

interface ModalContentProps {
  modalId: string;
  isActiveUser: boolean;
  setModalId: Dispatch<SetStateAction<string>>;
  setIsActiveUser: Dispatch<SetStateAction<boolean>>;
  handleCloseModal(): any;
  setGridData: Dispatch<SetStateAction<Session>>;
}

export const ModalContent = ({
  modalId,
  isActiveUser,
  setModalId,
  setIsActiveUser,
  handleCloseModal,
  setGridData,
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
        {(modalId === "About" && <AboutContent />) ||
          (modalId === "Contact" && (
            <ContactContent handleCloseModal={handleCloseModal} />
          )) ||
          (modalId === "Help" && <HelpContent />) ||
          (modalId === "New" && <NewContent setGridData={setGridData} />) ||
          (modalId === "Load" && <LoadContent setGridData={setGridData} />)}
      </Box>
    </Box>
  );
};

{
  /* {(prompt === "New" && <NewModalContent />) ||
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
          ))} */
}
