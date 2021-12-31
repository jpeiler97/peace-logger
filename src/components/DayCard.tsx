import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";
import { SwatchesPicker, ColorResult as SwatchColor } from "react-color";

interface Props {
  id: number;
  mood: string;
  message: string;
  date: string;
  color: string;
}

const DayCard: React.FC<Props> = ({ id, mood, date, message, color }) => {
  const [cardColor, setCardColor] = useState<string>(color);
  const handleChange = (
    color: SwatchColor,
    event: React.SyntheticEvent<EventTarget>
  ) => {
    event.preventDefault();
    setCardColor(color.hex);
  };
  return (
    <Grid container>
      <Paper sx={{ backgroundColor: cardColor }}>
        <Typography>{mood}</Typography>
      </Paper>
      <SwatchesPicker onChange={handleChange} />
    </Grid>
  );
};

export default DayCard;
