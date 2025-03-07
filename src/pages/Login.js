import { useState } from "react";
import axios from "axios";

import toast from 'react-hot-toast';
import  {useNavigate} from "react-router-dom"
export const Login = () => {
  const [isAuth, setIsAuth] = useState(
    JSON.parse(localStorage.getItem("isAuth")) || false
  );
  const [form, setForm] = useState({ email: "", password: "" });
  const navigate=useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };
const handleSubmit = async (e) => { 
  e.preventDefault();

  const loadingToast = toast.loading('Logging you in...');
  
  try {
      const result = await axios.post("https://moviemate-backend-tpz4.onrender.com/login", form);
     
      toast.dismiss(loadingToast); 

      if (result.data.success) {
          toast.success("Login successful!");

          setIsAuth(true);
          localStorage.setItem("isAuth", "true");
          localStorage.setItem("userId", result.data.userId);
          localStorage.setItem("username", result.data.username);
          console.log(result)
          // ✅ Prevent forced navigation to /watchlist
          if (window.location.pathname === "/login") {
              navigate("/");
          }
      } else {
          toast.error(result.data.message);
      }
  } catch (err) {
      toast.dismiss(loadingToast);
      toast.error("Invalid credentials. Please try again.");
  }
};

  return (
    <div className="flex items-center justify-center min-h-screen bg-slate-200 dark:bg-slate-900">
      <div className="bg-white dark:bg-black p-8 shadow-lg rounded-lg w-96">
        <h2 className="text-2xl font-bold text-center mb-6 text-gray-900 dark:text-gray-100">Login</h2>
        <form onSubmit={handleSubmit} className="flex flex-col gap-4">
          <input
            type="email"
            name="email"
            placeholder="Email"
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            className="p-3 border border-gray-300 dark:border-gray-600 rounded-lg bg-gray-50 dark:bg-gray-900 text-gray-900 dark:text-gray-100 focus:outline-none focus:ring-2 focus:ring-blue-500"
            onChange={handleChange}
            required
          />
          <button
            type="submit"
            className="bg-blue-500 text-white p-3 rounded-lg hover:bg-blue-600 transition-all"
          >
            Login
          </button>
        </form>
        {isAuth||<p className="text-center mt-4 text-gray-600 dark:text-gray-300">
          Don't have an account? <button onClick={() => navigate("/register")} className="text-blue-500 hover:underline">
  Register
</button>

        </p>
}
      </div>
    </div>
  );
};  

