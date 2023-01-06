import React, {
  useState,
  useEffect,
  useCallback,
  Dispatch,
  SetStateAction,
} from "react";
import { useForm } from "react-hook-form";
import { Box, Grid, ThemeProvider } from "@mui/material/";
import { inline, appTheme } from "../styles";
import { ModalBase, Nav, Cell } from "./index";
import { Session } from "../types";

interface GridProps {
  gridData: Session;
  setGridData: Dispatch<SetStateAction<Session>>;
  isActiveUser: boolean;
  setIsActiveUser: Dispatch<SetStateAction<boolean>>;
  isModalOpen: boolean;
  modalId: string;
  setModalId: Dispatch<SetStateAction<string>>;
  handleOpenModal(id: string): any;
  handleCloseModal(): any;
}

export const AOGrid = ({
  gridData,
  setGridData,
  isActiveUser,
  setIsActiveUser,
  isModalOpen,
  modalId,
  setModalId,
  handleOpenModal,
  handleCloseModal,
}: GridProps) => {
  const [hoverCell, setHoverCell] = useState<any>();
  const [isHovered, setIsHovered] = useState<boolean>(false);
  const toggleHovered = () => setIsHovered(!isHovered);

  const { setValue, handleSubmit } = useForm({
    defaultValues: gridData,
  });

  const [cellOpen, setCellOpen] = useState<any>();
  const [cellClosed, setCellClosed] = useState<any>();

  const updateSessionData = useCallback(
    (updatedCell) => {
      const updateTrackIndex = gridData.tracks.findIndex(
        (track) => track.title === updatedCell.trackTitle
      );

      gridData.tracks[updateTrackIndex].parameters.forEach(
        (paramTitle, paramIndex) => {
          if (paramTitle.parameter === updatedCell.parameter) {
            setValue(
              `tracks.${updateTrackIndex}.parameters.${paramIndex}.colour`,
              updatedCell.color
            );
            setValue(
              `tracks.${updateTrackIndex}.parameters.${paramIndex}.comment`,
              updatedCell.comment
            );
          }
        }
      );
    },
    [gridData.tracks, setValue, handleSubmit]
  );

  useEffect(() => {
    if (cellOpen && cellClosed) {
      Object.entries(cellOpen).forEach(([key]) => {
        if (cellOpen[key] !== cellClosed[key]) {
          updateSessionData(cellClosed);
        }
      });
    }
  }, [cellOpen, cellClosed, updateSessionData]);

  return (
    <Box sx={inline.gridSx.container}>
      <ThemeProvider theme={appTheme}>
        <ModalBase
          modalId={modalId}
          isActiveUser={isActiveUser}
          isModalOpen={isModalOpen}
          handleCloseModal={handleCloseModal}
          setModalId={setModalId}
          setIsActiveUser={setIsActiveUser}
          setGridData={setGridData}
        />
        <Nav gridData={gridData} handleOpenModal={handleOpenModal} />
        <Box sx={inline.gridSx.dom}>
          <Grid container>
            <Grid
              sx={{
                flexFlow: "row nowrap",
                justifyContent: "center",
              }}
              container
              spacing={"0.75vw"}
            >
              {gridData.parameters.map((parameter, index) => {
                return (
                  <Grid item sm={1} key={`${parameter}.${index}`}>
                    <Box sx={inline.cellSx.paraCell}>{parameter}</Box>
                  </Grid>
                );
              })}
            </Grid>
            {gridData.tracks.map((track, index) => {
              return (
                <Grid
                  container
                  sx={{
                    display: "flex",
                    flexFlow: "row nowrap",
                    justifyContent: "center",
                  }}
                  key={`${track}.${index}`}
                  spacing={"0.75vw"}
                >
                  {gridData.parameters.map((parameter) => {
                    return parameter === `title` ? (
                      <Grid item sm={1} key={`${parameter}.${index}`}>
                        <Box sx={inline.cellSx.titleCell}>{track.title}</Box>
                      </Grid>
                    ) : (
                      <Cell
                        key={`${parameter}.${index}`}
                        cell={{ track, parameter }}
                        track={track}
                        parameter={parameter}
                        toggleHovered={toggleHovered}
                        setHoverCell={setHoverCell}
                        hoverCell={hoverCell}
                        gridData={gridData}
                        setCellOpen={setCellOpen}
                        setCellClosed={setCellClosed}
                      />
                    );
                  })}
                </Grid>
              );
            })}
          </Grid>
        </Box>
      </ThemeProvider>
    </Box>
  );
};
