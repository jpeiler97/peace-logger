//Packages
import React, { useState } from "react";
import { Grid, IconButton, Modal, Paper, Typography } from "@mui/material";
import { ModeEdit, CancelOutlined as Cancel } from "@mui/icons-material";
import { SwatchesPicker, ColorResult } from "react-color";
//Interfaces
import Mood from "../interfaces/mood";
//Styles
import { EditModal } from "./MoodCard.styles";
import { Box } from "@mui/system";

interface Props {
  id: number;
  name: string;
  color: string;
  editMood: (mood: Mood) => void;
}

const MoodCard: React.FC<Props> = ({ id, name, color, editMood }) => {
  const [currentColor, setCurrentColor] = useState<string>(color);
  const [currentName, setCurrentName] = useState<string>(name);
  const [open, setOpen] = useState(false);
  const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setCurrentName(e.target.value);
  };

  const handleColorChange = (
    newColor: ColorResult,
    event: React.SyntheticEvent<EventTarget>
  ) => {
    let colorHex = newColor.hex;
    setCurrentColor(colorHex);
    editMood({ id, name, color: colorHex });
    event.preventDefault();
  };

  return (
    <Grid container>
      <Paper sx={{ backgroundColor: currentColor }}>
        <Typography>{currentName}</Typography>
      </Paper>
      <IconButton onClick={() => setOpen(!open)}>
        <ModeEdit />
      </IconButton>

      <Modal open={open}>
        <EditModal>
          <Grid
            container
            justifyContent="center"
            alignItems="center"
            width="auto"
          >
            <Box
              component="div"
              sx={{ position: "absolute", top: 0, right: 0 }}
            >
              <IconButton onClick={() => setOpen(!open)}>
                <Cancel />
              </IconButton>
            </Box>

            <Grid
              container
              item
              xs={12}
              justifyContent="center"
              alignItems="center"
            >
              <input defaultValue={currentName} />
            </Grid>
            <Grid container item xs={12} justifyContent="center" my={2}>
              <SwatchesPicker onChange={handleColorChange} />
            </Grid>
          </Grid>
        </EditModal>
      </Modal>
    </Grid>
  );
};

export default MoodCard;
