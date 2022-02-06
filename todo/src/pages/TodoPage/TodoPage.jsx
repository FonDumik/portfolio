import { useState, useEffect } from "react";
import TodoForm from "../../components/TodoForm/TodoForm";
import TodoList from "../../components/TodoList/TodoList";

const TodoPage = () => {
  const [todos, setTodos] = useState([]);
  const [newTodo, setNewTodo] = useState("");

  useEffect(() => {
    const saved = JSON.parse(localStorage.getItem("todos") || "[]");
    setTodos(saved);
  }, []);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos]);

  const addTodo = () => {
    if (!newTodo) return;
    const newItem = { title: newTodo, id: Date.now(), isCompleted: false };
    setTodos((prev) => [...prev, newItem]);
    setNewTodo("");
  };

  const completeHandler = (id, flag) => {
    const newArray = todos.map((todo) => {
      if (todo.id === id) {
        return {
          ...todo,
          isCompleted: !flag,
        };
      } else {
        return todo;
      }
    });
    setTodos([...newArray]);
  };

  const deleteHandler = (id) => {
    const newArray = todos.filter((todo) => todo.id !== id);
    setTodos([...newArray]);
  };

  return (
    <div className="container">
      <TodoForm addTodo={addTodo} value={newTodo} setNewTodo={setNewTodo} />
      {todos.length === 0 ? (
        <h1 className="container ">Список задач пуст</h1>
      ) : (
        false
      )}
      <TodoList
        todos={todos}
        deleteHandler={deleteHandler}
        completeHandler={completeHandler}
      />
    </div>
  );
};

export default TodoPage;
