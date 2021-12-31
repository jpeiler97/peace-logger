import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { SwatchesPicker, ColorResult } from "react-color";
import Mood from "../interfaces/mood";
import { updateMood } from "../routes/moodRoutes";

interface Props {
  id: number;
  name: string;
  color: string;
  editMood: (mood: Mood) => void;
}

const MoodCard: React.FC<Props> = ({ id, name, color, editMood }) => {
  const [currentColor, setCurrentColor] = useState<string>(color);
  const [currentName, setCurrentName] = useState<string>(name);

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
        <input value={currentName} onChange={handleNameChange} />
      </Paper>
      <SwatchesPicker onChange={handleColorChange} />
    </Grid>
  );
};

export default MoodCard;
