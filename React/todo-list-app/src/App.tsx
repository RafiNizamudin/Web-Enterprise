import './App.css'
import { TodoItem } from './components/Todoltem'
import type { TodoItemProps } from './TodoItem.dto';

export default function App() {
  const onHandleMarkDone = (id: number) => {
    console.log(`Todo with id: ${id} is marked to done`);
  }

  const onHandleDelete = (id: number) => {
    console.log(`Todo with id: ${id} is Deleted`);
  }

  const todos: TodoItemProps[] = [
    { id: 1, todo: 'Belajar React', status: 1, isDeleted: 0, onMarkDone: onHandleMarkDone, onDelete: onHandleDelete},
    { id: 2, todo: 'Belajar Project', status: 0, isDeleted: 0, onMarkDone: onHandleMarkDone, onDelete: onHandleDelete},
    { id: 3, todo: 'Belajar Vite', status: 1, isDeleted: 0, onMarkDone: onHandleMarkDone, onDelete: onHandleDelete},
    { id: 4, todo: 'Belajar JS', status: 0, isDeleted: 0, onMarkDone: onHandleMarkDone, onDelete: onHandleDelete},
    { id: 5, todo: 'Belajar HTML', status: 1, isDeleted: 0, onMarkDone: onHandleMarkDone, onDelete: onHandleDelete},
    { id: 6, todo: 'Belajar Python', status: 0, isDeleted: 0, onMarkDone: onHandleMarkDone, onDelete: onHandleDelete},
  ];

  return (
      <div>
        <h1>Todo List</h1>
        <button onClick={() => {}}>+ Add Todo</button>

        <ul>
          { todos 
            .filter(todo => todo.isDeleted === 0)
            .map(todo => (
              <TodoItem
                key={todo.id}
                {...todo}
              />
            ))}
        </ul>
      </div>
  );
}
