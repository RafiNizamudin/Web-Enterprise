import { useEffect, useState, type JSX } from 'react';
import { Navigate } from 'react-router-dom';
import supabase from '../utils/supabase';

export default function ProtectedRoute({ children }: { children: JSX.Element }) {
  const [loading, setLoading] = useState(true);
  const [authenticated, setAuthenticated] = useState(false);

  useEffect(() => {
    supabase.auth.getSession().then(({ data: { session } }) => {
      setAuthenticated(!!session);
      setLoading(false);
    });
  }, []);

  if (loading) return <div>Loading...</div>;
  return authenticated ? children : <Navigate to="/login" />;
}
