import { Box, TextField, IconButton } from "@mui/material";
import AddCircleIcon from "@mui/icons-material/AddCircle";
import CheckCircleIcon from "@mui/icons-material/CheckCircle";
import { inline } from "../../../styles";
import { TitleList, ParamList } from "./index";

export const ListForm = ({
  addInputArray,
  removeInputArray,
  addParameterList,
  submitInputArray,
  formPrompt,
  sessionData,
  textInput,
  inputArray,
}) => {
  return (
    <>
      <Box sx={inline.modalCenteredSx}>
        <Box sx={inline.newSessionModal.text}>
          {formPrompt === 2 ? (
            <>
              Enter the <b>track titles</b> you wish to include in the&nbsp;
              {sessionData.sessionTitle} session.
            </>
          ) : (
            <>
              Enter or select the <b>session elements</b> you wish to include in
              the {sessionData.sessionTitle} session.
              <ParamList addParameterList={addParameterList} />
            </>
          )}
        </Box>
        <Box sx={inline.newSessionModal.field}>
          <TextField
            sx={{ ml: "8vw", width: "19.5vw" }}
            variant="standard"
            margin="normal"
            autoComplete="off"
            inputProps={{ maxLength: 14 }}
            inputRef={textInput}
          />
          <IconButton onClick={addInputArray} disableRipple>
            <AddCircleIcon sx={{ mr: "0.75vw" }} />
          </IconButton>
        </Box>
        <Box>
          <TitleList
            data={inputArray}
            onClick={(title) => removeInputArray(title)}
          />
          {inputArray.length > 0 && (
            <IconButton
              onClick={submitInputArray}
              disableRipple
              sx={{ ml: "0.75vw" }}
            >
              <CheckCircleIcon />
            </IconButton>
          )}
        </Box>
      </Box>
    </>
  );
};
