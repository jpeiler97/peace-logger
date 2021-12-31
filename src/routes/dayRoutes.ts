import axios from "axios";
import Day from "../interfaces/day";

export const getDays = (): Promise<Day[]> => {
  return axios
    .get<Day[]>("http://localhost:3001/days")
    .then((res) => {
      return res.data;
    })
    .catch((err) => {
      throw err;
    });
};
