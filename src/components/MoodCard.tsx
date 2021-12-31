import React from "react";
import { Grid, Paper, Typography } from "@mui/material";

interface Props {
  id: number;
  mood: string;
  color: string;
}

const MoodCard: React.FC<Props> = ({ id, mood, color }) => {
  return (
    <Grid container>
      <Paper sx={{ backgroundColor: color }}>
        <Typography>{mood}</Typography>
      </Paper>
    </Grid>
  );
};

export default MoodCard;
