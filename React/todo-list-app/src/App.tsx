import './App.css'
import { useEffect, useState } from 'react';
import { TodoItem } from './components/Todoltem'
import type { todoDto } from './dtos/todo.dto';
import supabase from './utils/supabase';

export default function App() {
  const [todos, setTodos] = useState<todoDto[]>([]);

  useEffect(() => {
    async function getTodos() {
      
      const { data: dataTodos, error } = await supabase.from('todos').select();

      console.log('data todos', dataTodos)
      if (error) {
        console.log('error', error);
      }
      if (dataTodos) {
        setTodos(dataTodos)
      }
    }

    getTodos();
  }, [])

  const onHandleMarkDone = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, status: 1} : todo
    ));
  };

  const onHandleDelete = (id: number) => {
    setTodos(todos.map(todo =>
      todo.id === id ? {...todo, is_deleted: 1} : todo
    ));
  };

  return (
      <div>
        <h1>Todo List</h1>
        <button onClick={() => {}}>+ Add Todo</button>
        <ul>
          { todos 
            .filter(todo => todo.is_deleted === 0)
            .map(todo => (
              <TodoItem
                key={todo.id}
                {...todo}
                onMarkDone={onHandleMarkDone}
                onDelete={onHandleDelete}              
                />
            ))}
        </ul>
      </div>
  );
}
