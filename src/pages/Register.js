import { useState } from "react";
import axios from "axios";
import  {useNavigate} from "react-router-dom"
import toast from 'react-hot-toast';
export const Register = () => {
  const [form, setForm] = useState({ username: "", email: "", password: "" });
  const navigate=useNavigate();
  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
        await axios.post("https://moviemate-backend-tpz4.onrender.com/register", form);
        navigate('/login');
        toast.success('Registration Successful!');
    } catch (err) {
        toast.error('Error registering user. Please try again');
    }
};

  return (
    <div className="min-h-screen flex items-center justify-center p-6 bg-gray-100 text-gray-900 dark:bg-black dark:text-white transition-colors">
      <div className="w-full max-w-md p-6 rounded-2xl shadow-md bg-white dark:bg-gray-900 transition-colors">
        <h2 className="text-2xl font-semibold text-center mb-4">Register</h2>
        <form className="space-y-4" onSubmit={handleSubmit}>
          <input
            type="text"
            name="username"
            placeholder="Username"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 transition bg-transparent dark:border-gray-700 dark:focus:ring-blue-400"
            required
          />
          <input
            type="email"
            name="email"
            placeholder="Email"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 transition bg-transparent dark:border-gray-700 dark:focus:ring-blue-400"
            required
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            onChange={handleChange}
            className="w-full p-3 rounded-lg border focus:ring-2 focus:ring-blue-500 transition bg-transparent dark:border-gray-700 dark:focus:ring-blue-400"
            required
          />
          <button
            type="submit"
            className="w-full p-3 rounded-lg bg-blue-600 text-white font-semibold hover:bg-blue-700 transition"
          >
            Register
          </button>
        </form>
      </div>
    </div>
  );
};
