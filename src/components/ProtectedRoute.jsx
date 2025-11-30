import { Navigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext.jsx"

export default function ProtectedRoute({ children, requiredRole }) {
  const { user } = useAuth();
  
  //si no esta logueado, redirigir al login
  if (!user) return <Navigate to="/login" replace />;
 
  //si no tiene el rol requerido redirigir al login (o a una futura pagina de prohibido)
  if (requiredRole && user.role !== requiredRole) {
    return <Navigate to="/login" replace />;
  }

  return children;
}

