import { Link, useNavigate } from "react-router-dom";

export default function AdminLayout({ children }) {
  const navigate = useNavigate();

  const user = JSON.parse(localStorage.getItem("user"));

  // 🚨 Safety check
  if (!user || !user.isAdmin) {
    navigate("/");
    return null;
  }

  const handleLogout = () => {
    localStorage.removeItem("user");
    localStorage.removeItem("token");
    navigate("/login");
  };

  return (
    <div className="flex min-h-screen">

      {/* 🔹 SIDEBAR */}
      <div className="w-64 bg-gray-900 text-white p-5">
        <h2 className="text-xl font-bold mb-6">Admin Panel</h2>

        <nav className="flex flex-col gap-4">
          <Link to="/admin/dashboard" className="hover:text-gray-300">
            Dashboard
          </Link>

          <Link to="/admin/places" className="hover:text-gray-300">
            Manage Places
          </Link>

          <button
            onClick={handleLogout}
            className="text-left hover:text-red-400"
          >
            Logout
          </button>
        </nav>
      </div>

      {/* 🔹 MAIN CONTENT */}
      <div className="flex-1 bg-gray-100">

        {/* 🔸 HEADER */}
        <div className="bg-white shadow p-4 flex justify-between">
          <h1 className="font-semibold">Admin Dashboard</h1>
          <p>{user?.name}</p>
        </div>

        {/* 🔸 PAGE CONTENT */}
        <div className="p-6">
          {children}
        </div>

      </div>
    </div>
  );
}