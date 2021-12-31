import axios from "axios";
import Mood from "../interfaces/mood";

export const getMoods = (): Promise<Mood[]> => {
  return axios
    .get<Mood[]>("http://localhost:3001/moods")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};

export const updateMood = (payload: Mood) => {
  axios
    .put<Mood>(`http://localhost:3001/moods/${payload.id}`, payload)
    .then((res) => console.log(res))
    .catch((err) => {
      throw err;
    });
};
