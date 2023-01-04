import { Box, IconButton, List, ListItem, ListItemText } from "@mui/material";
import ClearIcon from "@mui/icons-material/Clear";
import { inline, palette } from "../../../styles";

// formerly NewModalContentList

interface TitleListProps {
  data: any;
  onClick: any;
}

export const TitleList = ({ data, onClick }: TitleListProps) => {
  return (
    <Box sx={{ ...inline.modalCenteredSx, my: "1vw" }}>
      <List
        sx={{
          width: "28vw",
          maxHeight: "11vw",
          overflow: "auto",
        }}
      >
        {data &&
          data.map((title, number) => {
            return (
              <ListItem
                key={`${title}.${number}`}
                sx={{ bgcolor: palette._black }}
                secondaryAction={
                  <IconButton onClick={() => onClick(title)}>
                    <ClearIcon />
                  </IconButton>
                }
              >
                <ListItemText primary={title} />
              </ListItem>
            );
          })}
      </List>
    </Box>
  );
};
