import React, { Dispatch, SetStateAction } from "react";
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
}: ModalContentProps) => {};
