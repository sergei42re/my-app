import { useState } from "react";
import styles from "./TodoList.module.css";
import * as React from "react";

export function TodoList() {
  const [tasks, setTasks] = useState<string[]>([]);
  const [value, setValue] = useState("");

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setValue(event.target.value);
  };

  const handleAddTask = () => {
    if (value.trim() === "") return;
    setTasks([...tasks, value]);
    setValue("");
  };
  return (
    <>
    <input value={value} onChange={handleChange} placeholder="Новая задача" />
    <button className={styles.btn} onClick={handleAddTask}>Добавить</button>
    <ul>
      {tasks.map((task, index) => (
      <li key={index}>{task}</li>
      ))}
    </ul>
    </>
  )
}