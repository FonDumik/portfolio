import React from "react";

const TodoForm = (props) => {
  const inputChangeHandler = (e) => {
    props.setNewTodo(e.target.value);
  };

  const keyDownHandler = (e) => {
    if (e.key === "Enter") {
      e.preventDefault();
      props.addTodo(e.target.value);
      e.target.value = "";
    }
  };

  return (
    <div className="row my20">
      <form className="col s12" onKeyDown={keyDownHandler}>
        <div className="row">
          <div className="input-field col s12">
            <input
              type="text"
              id="textarea1"
              className="materialize-textarea"
              onChange={inputChangeHandler}
              value={props.value}
            />
            <label htmlFor="textarea1">Введите вашу задачу</label>
          </div>
        </div>
      </form>
    </div>
  );
};

export default TodoForm;
