import React, { useEffect, useState } from "react";
import "./App.css";
import { Header, Title } from "./App.styles";
import { getMoods } from "./routes/moodRoutes";
import { getDays } from "./routes/dayRoutes";
import Mood from "./interfaces/mood";
import MoodCard from "./components/MoodCard";
import Day from "./interfaces/day";
import DayCard from "./components/DayCard";

function App() {
  const [moods, setMoods] = useState<Mood[]>([]);
  const [days, setDays] = useState<Day[]>([]);

  useEffect(() => {
    getMoods().then((res) => {
      setMoods(res);
    });
    getDays().then((res) => {
      setDays(res);
    });
  }, []);

  return (
    <div className="App">
      <Header>
        <Title>
          Daily
          <br />
          Peace
        </Title>
      </Header>

      {moods.map((mood: Mood) => {
        return (
          <MoodCard
            key={mood.id}
            id={mood.id}
            mood={mood.name}
            color={mood.color}
          ></MoodCard>
        );
      })}
      {days.map((day: Day) => {
        return (
          <DayCard
            key={day.id}
            id={day.id}
            mood={moods.filter((mood) => day.moodId === mood.id)[0].name}
            color={moods.filter((mood) => day.moodId === mood.id)[0].color}
            message={day.message}
            date={day.date}
          ></DayCard>
        );
      })}
    </div>
  );
}

export default App;
