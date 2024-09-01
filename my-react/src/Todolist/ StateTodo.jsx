import { useState } from "react";
import "./StateTodo.css";

let maxId = 0;
const StateTodo = () => {
  const [tittle, setTittle] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChangeTitle = (e) => {
    setTittle(e.target.value);
  };

  const handleClick = () => {
    setTodo([
      ...todo,
      { id: ++maxId, tittle, created: new Date(), isDone: false },
    ]);
  };

  const handledone = (e) => {
    setTodo(
      todo.map((item) => {
        if (item.id === Number(e.target.dataset.id)) {
          return { ...item, isDone: true };
        } else {
          return item;
        }
      })
    );
  };

  return (
    <div>
      <label>
        Todo:
        <input
          type="text"
          name="tittle"
          value={tittle}
          onChange={handleChangeTitle}
        />
      </label>
      <button type="button" onClick={handleClick}>
        ADD
      </button>
      <ul>
        {todo.map((item) => (
          <li key={item.id} className={item.isDone ? "done" : ""}>
            {item.tittle}
            <button type="button" onClick={handledone} data-id={item.id}>
              DONE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateTodo;
