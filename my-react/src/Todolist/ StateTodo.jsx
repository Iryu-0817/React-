import { useState } from "react";
import "./StateTodo.css";

let maxId = 0;
const StateTodo = () => {
  const [tittle, setTittle] = useState("");
  const [todo, setTodo] = useState([]);
  const [desc, setDesc] = useState(true);

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

  const handleRemove = (e) => {
    setTodo(todo.filter((item) => item.id !== Number(e.target.dataset.id)));
  };

  const handelSort = (e) => {
    const sorted = [...todo]; //既存のTodoリストを複製の上でソート

    sorted.sort((a, b) => {
      // descがtrueの場合は降順、falseの場合は昇順
      if (desc) {
        return a.created.getTime() - b.created.getTime(); //a.created.getTime() が b.created.getTime() より小さい場合、負の値が返されるため、a が b より前に配置されます。これが昇順のソートです。
      } else {
        return b.created.getTime() - a.created.getTime(); //a.created.getTime() が b.created.getTime() より大きい場合、正の値が返されるため、a が b より後に配置されます。これが降順のソートです。
      }
    });

    // descの状態を反転
    setDesc((d) => !d); //dはdescの略
    // ソート後のリストをセット
    setTodo(sorted);
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
      <button type="button" onClick={handelSort}>
        SORT({desc ? "↑" : "↓"})
      </button>
      <ul>
        {todo.map((item) => (
          <li key={item.id} className={item.isDone ? "done" : ""}>
            {item.tittle}
            <button type="button" onClick={handledone} data-id={item.id}>
              DONE
            </button>
            <button type="button" onClick={handleRemove} data-id={item.id}>
              DELETE
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default StateTodo;
