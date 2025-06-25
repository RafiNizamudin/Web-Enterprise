import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import supabase from '../utils/supabase';

export default function Login() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLogin, setIsLogin] = useState(true);
  const [message, setMessage] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    let result;
    if (isLogin) {
      result = await supabase.auth.signInWithPassword({ email, password });
    } else {
      result = await supabase.auth.signUp({ email, password });
    }

    const { error } = result;
    if (error) {
      setMessage(error.message);
    } else {
      navigate('/');
    }
  };

  return (
    <div className="p-4 max-w-sm mx-auto">
      <h2 className="text-lg font-bold mb-4">{isLogin ? 'Login' : 'Register'}</h2>
      <form onSubmit={handleSubmit} className="space-y-2">
        <input
          type="email"
          className="w-full p-2 border rounded"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <input
          type="password"
          className="w-full p-2 border rounded"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />
        <button type="submit" className="w-full p-2 bg-blue-500 text-white rounded">
          {isLogin ? 'Login' : 'Register'}
        </button>
        {message && <p className="text-red-500 text-sm">{message}</p>}
      </form>
      <p className="text-sm mt-2 text-blue-600 cursor-pointer" onClick={() => setIsLogin(!isLogin)}>
        {isLogin ? 'Belum punya akun? Daftar di sini' : 'Sudah punya akun? Login di sini'}
      </p>
    </div>
  );
}
