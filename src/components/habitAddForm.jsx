import React from "react";
import { memo } from "react";

const HabitAddForm = memo((props) => {
  console.log("habitAddForm");
  const formRef = React.createRef();
  const inputRef = React.createRef();

  const handleSubmit = (e) => {
    e.preventDefault();
    const name = inputRef.current.value;
    props.onAdd(name);
    // inputRef.current.value = "";
    formRef.current.reset();
  };

  return (
    <form ref={formRef} onSubmit={handleSubmit}>
      <input className="add-input" ref={inputRef} type="text" placeholder="Habit" />
      <button className="add-button">Add</button>
    </form>
  );
});

export default HabitAddForm;
