import { Navigate } from "react-router-dom";

export default function ProtectedRoute({ children, adminOnly = false }) {
  const user = JSON.parse(localStorage.getItem("user"));

  // ❌ Not logged in
  if (!user) {
    return <Navigate to="/login" />;
  }

  // ❌ Not admin trying admin route
  if (adminOnly && !user.isAdmin) {
    return <Navigate to="/" />;
  }

  // ✅ Allowed
  return children;
}