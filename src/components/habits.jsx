import React from "react";
import HabitAddForm from "./habitAddForm";
import Habit from "./habit";

const Habits = ({ habits, onAdd, onIncrement, onDecrement, onDelete, onReset }) => {
  console.log("habits");
  return (
    <>
      <HabitAddForm onAdd={onAdd} />
      <ul>
        {habits.map((habit) => (
          <Habit
            key={habit.id}
            habit={habit}
            onIncrement={onIncrement}
            onDecrement={onDecrement}
            onDelete={onDelete}
          />
        ))}
      </ul>
      <button className="habits-reset" onClick={onReset}>
        Reset All
      </button>
    </>
  );
};

export default Habits;
