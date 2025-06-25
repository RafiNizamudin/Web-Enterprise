import './App.css';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import ListTodo from './pages/ListTodo';
import AddTodo from './pages/AddTodo';
import Login from './pages/Login';
import ProtectedRoute from './components/ProtectedRoute';

export default function App() {
  return (
    <Router>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route
          path="/"
          element={
            <ProtectedRoute>
              <ListTodo />
            </ProtectedRoute>
          }
        />
        <Route
          path="/add"
          element={
            <ProtectedRoute>
              <AddTodo />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}
