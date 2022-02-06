import React from "react";

const TodoList = (props) => {
  return (
    <div className="container">
      <ul className="collection">
        {props.todos.map((todo, key) => {
          return (
            <li
              className={
                todo.isCompleted
                  ? "collection-item completed"
                  : "collection-item"
              }
              key={key}
            >
              <label>
                <input
                  type="checkbox"
                  className="filled-in"
                  onChange={() =>
                    props.completeHandler(todo.id, todo.isCompleted)
                  }
                  checked={todo.isCompleted ? "checked" : false}
                />
                <span>{todo.title}</span>
              </label>
              <i
                className="material-icons small delete"
                onClick={() => props.deleteHandler(todo.id)}
              >
                delete
              </i>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default TodoList;
