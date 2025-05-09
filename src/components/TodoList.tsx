import { useState } from 'react';
import TodoItem from './TodoItem';

type Todo = {
  id: number;
  description: string;
};

const TodoList = () => {
  const [todos, setTodos] = useState<Todo[]>([
    { id: 1, description: 'Gå och Handla' },
    { id: 2, description: 'Ta lillebrorsan till fotbollmatch' },
    { id: 3, description: 'Gå till gymmet' },
  ]);
  const [completedTodos, setCompletedTodos] = useState<Todo[]>([]);

  const handleCompleteTodo = (id: number) => {
    setTodos((oldTodos) => {
      const todoToComplete = oldTodos.find((todo) => todo.id === id);
      if (todoToComplete) {
        setCompletedTodos((oldCompleted) => {
          if (!oldCompleted.some((todo) => todo.id === id)) {
            return [...oldCompleted, todoToComplete];
          }
          return oldCompleted;
        });
      }
      return oldTodos.filter((todo) => todo.id !== id); 
    });
  };
  const handleUndoTodo = (id: number) => {
    setCompletedTodos((oldCompleted) => {
      const todoToUndo = oldCompleted.find((todo) => todo.id === id);
      if (todoToUndo) {
        setTodos((oldTodos) => {
          if (!oldTodos.some((todo) => todo.id === id)) {
            return [...oldTodos, todoToUndo];
          }
          return oldTodos; 
        });
      }
      return oldCompleted.filter((todo) => todo.id !== id); 
    });
  };
  return (
    <div style={{ display: 'flex', justifyContent: 'space-between' }}>
      {}
      <div style={{ flex: 1, marginRight: '1rem', backgroundColor: 'lightgrey', borderRadius: '8px' }}>
        <h2>ToDo:</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {todos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              description={todo.description}
              onRemove={handleCompleteTodo}
              buttonText="Done"
            />
          ))}
        </ul>
      </div>

      {}
      <div style={{ flex: 1, marginLeft: '1rem', backgroundColor: 'lightgrey', borderRadius: '8px' }}>
        <h2>Completed:</h2>
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {completedTodos.map((todo) => (
            <TodoItem
              key={todo.id}
              id={todo.id}
              description={todo.description}
              onRemove={handleUndoTodo}
              buttonText="Undo"
            />
          ))}
        </ul>
      </div>
    </div>
  );
};

export default TodoList;