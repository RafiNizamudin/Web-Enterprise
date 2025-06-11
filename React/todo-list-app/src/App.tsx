import './App.css'
import { useEffect, useState } from 'react';
import { TodoItem } from './components/Todoltem'
import type { todoDto } from './dtos/todo.dto';
import supabase from './utils/supabase';

export default function App() {
  const [todos, setTodos] = useState<todoDto[]>([]);
  const [showModal, setShowModal] = useState(false);
  const [newTodo, setNewTodo] = useState('');


  useEffect(() => {
    async function getTodos() {    
      const { data: dataTodos, error } = await supabase
      .from('todos')
      .select();

      if (error) {
        console.log('error', error);
      }
      if (dataTodos) {
        setTodos(dataTodos)
      }
    }
    getTodos();
  }, [])

  const onHandleMarkDone = async (id: number) => {
    await supabase.from('todos').update({ status: 1}).eq('id', id);
    setTodos(todos.map(todo => (todo.id === id ? {...todo, status: 1} : todo)));
  };

  const onHandleDelete = async (id: number) => {
    await supabase.from('todos').update({ is_deleted: 1}).eq('id', id);
    setTodos(todos.map(todo => (todo.id === id ? {...todo, is_deleted: 1} : todo)));
  };

  const onHandleAddTodo = async (todo: string) => {
    if (todo.trim() === '') {
      alert('Todo tidak boleh kosong');
      return;
    }

    const { data, error } = await supabase
    .from('todos')
    .insert({ todo: todo, status: 0, is_deleted: 0})
    .select();

    if (!error && data) {
      setTodos([...todos, data[0]]);
      setShowModal(false);
      setNewTodo('');
    }
  };

  return (
      <div>
        <h1>Todo List</h1>
        <button onClick={() => setShowModal(true)}>+ Add Todo</button>
        { showModal && (
          <div className='modal'>
            <div className='modal-content'>
              <input 
                type="text" 
                value={newTodo}
                onChange={(e) => setNewTodo(e.target.value)}
                placeholder='Masukan todo'
              /><br/>
              <button onClick={() => onHandleAddTodo(newTodo)}>Simpan</button>
              <button onClick={() => setShowModal(false)}>Batal</button>
            </div>
          </div>
        )}
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
