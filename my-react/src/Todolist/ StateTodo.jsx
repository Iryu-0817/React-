import { useState } from "react";

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
        追加
      </button>
      <ul>
        {todo.map((item) => (
          <li key={item.id}>{(item, tittle)}</li>
        ))}
      </ul>
    </div>
  );
};

export default StateTodo;
