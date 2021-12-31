import React, { useState } from "react";
import { Grid, Paper, Typography } from "@mui/material";

interface Props {
  id: number;
  mood: string;
  message: string;
  date: string;
  color: string;
}

const DayCard: React.FC<Props> = ({ id, mood, date, message, color }) => {
  return (
    <Grid container>
      <Paper sx={{ backgroundColor: color }}>
        <Typography>{mood}</Typography>
      </Paper>
    </Grid>
  );
};

export default DayCard;
