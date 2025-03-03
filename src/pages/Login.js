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
        const result = await axios.post("http://localhost:3001/login", form);

        toast.dismiss(loadingToast); // Remove the loading toast

        if (result.data === "Success") {
            toast.success("Login successful!");
            navigate('/');
            setIsAuth(true);
            localStorage.setItem("isAuth", true)
        } else {
            toast.error(result.data); // Show error from backend response
        }
    } catch (err) {
        toast.dismiss(loadingToast);
        toast.error("Invalid credentials. Please try again.");
    }
};
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 dark:bg-black">
      <div className="bg-white dark:bg-gray-900 p-8 shadow-lg rounded-lg w-96">
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
        <p className="text-center mt-4 text-gray-600 dark:text-gray-300">
          Don't have an account? <a href="/register" className="text-blue-500 hover:underline">Register</a>
        </p>
      </div>
    </div>
  );
};  

