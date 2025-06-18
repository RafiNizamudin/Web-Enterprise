import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListTodo from './pages/ListTodo';
import AddTodo from './pages/AddTodo';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<ListTodo />} />
        <Route path="/add" element={<AddTodo />} />
      </Routes>
    </Router>
  );
}