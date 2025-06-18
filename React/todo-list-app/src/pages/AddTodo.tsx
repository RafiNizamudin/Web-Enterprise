import { useState } from 'react';
import supabase from '../utils/supabase';
import { useNavigate } from 'react-router-dom';

export default function AddTodo() {
  const [newTodo, setNewTodo] = useState('');
  const navigate = useNavigate();

  const onHandleAddTodo = async () => {
    if (newTodo.trim() === '') {
      alert('Todo tidak boleh kosong');
      return;
    }

    const { data, error } = await supabase
      .from('todos')
      .insert({ todo: newTodo, status: 0, is_deleted: 0 })
      .select();

    if (!error && data) {
      setNewTodo('');
      navigate('/');
    }
  };

  return (
    <div className='modal'>
      <div className='modal-content'>
        <h2>Tambah Todo</h2>
        <input
          type="text"
          value={newTodo}
          onChange={(e) => setNewTodo(e.target.value)}
          placeholder='Masukan todo'
        /><br />
        <button onClick={onHandleAddTodo}>Simpan</button>
        <button onClick={() => navigate('/')}>Batal</button>
      </div>
    </div>
  );
}