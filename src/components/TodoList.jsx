import React, { useEffect, useState } from "react";
import { listTodo, removeTodo } from "../modules/model";

const TodoList = () => {
  const [data, setData] = useState([]);

  const fetchData = async () => {
    console.log("fetching");
    const result = await listTodo();
    setData(result);
  };

  useEffect(() => {
    fetchData();
  }, []);

  return (
    <ul>
      {data.map(i => (
        <li key={i}>
          {i} <button onClick={() => removeTodo(i)}>X</button>
        </li>
      ))}
    </ul>
  );
};

export { TodoList };
