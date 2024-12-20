import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [role, setRole] = useState("User"); // Default role is "User"
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    // Ensure the role is always included in the payload
    const payload = { name, email, password, role };

    // Log the payload to check if the role is included
    ("Payload being sent: ", payload);

    await axios
      .post("https://event-management-system-project-in.onrender.com/api/auth/register", payload)
      .then((res) => {
        toast.success(res.data.message);
        setTimeout(() => {
          navigate("/login");
        }, 1300);
      })
      .catch((error) => {
        (error);
        toast.error(error.response.data.message);
      });

    // Reset form fields after submission
    setName("");
    setEmail("");
    setPassword("");
    // Do not reset the role here, keep it as "User"
  };

  return (
    <>
      <div>
        <div className="font-[sans-serif] bg-white md:h-screen">
          <div className="grid md:grid-cols-2 items-center gap-8 h-full">
            <div className="max-md:order-1 p-4">
              <img src="https://readymadeui.com/signin-image.webp" className="lg:max-w-[85%] w-full h-full object-contain block mx-auto" alt="login-image" />
            </div>

            <div className="flex items-center md:p-8 p-6 bg-[#0C172C] h-full lg:w-11/12 lg:ml-auto">
              <form className="max-w-lg w-full mx-auto" onSubmit={handleSubmit}>
                <div className="mb-12">
                  <h3 className="text-3xl font-bold text-yellow-400">Create an account</h3>
                </div>

                {/* Full Name */}
                <div>
                  <label className="text-white text-xs block mb-2">Full Name</label>
                  <div className="relative flex items-center">
                    <input name="name" type="text" required className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" placeholder="Enter name" value={name} onChange={(e) => setName(e.target.value)} />
                  </div>
                </div>

                {/* Email */}
                <div className="mt-8">
                  <label className="text-white text-xs block mb-2">Email</label>
                  <div className="relative flex items-center">
                    <input name="email" type="text" required className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" value={email} onChange={(e) => setEmail(e.target.value)} placeholder="Enter email" />
                  </div>
                </div>

                {/* Password */}
                <div className="mt-8">
                  <label className="text-white text-xs block mb-2">Password</label>
                  <div className="relative flex items-center">
                    <input name="password" type={showPassword ? "text" : "password"} required className="w-full bg-transparent text-sm text-white border-b border-gray-300 focus:border-yellow-400 px-2 py-3 outline-none" value={password} onChange={(e) => setPassword(e.target.value)} placeholder="Enter password" />
                    <svg onClick={() => setShowPassword(!showPassword)} xmlns="http://www.w3.org/2000/svg" fill="#bbb" stroke="#bbb" className="w-[18px] h-[18px] absolute right-2 cursor-pointer" viewBox="0 0 128 128">
                      <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z" data-original="#000000"></path>
                    </svg>
                  </div>
                </div>

                {/* Terms and Conditions */}
                <div className="flex items-center mt-8">
                  <input id="remember-me" name="remember-me" type="checkbox" required className="h-4 w-4 shrink-0 rounded required" />
                  <label htmlFor="remember-me" className="text-white ml-3 block text-sm">
                    I accept the <a className="text-yellow-500 font-semibold hover:underline ml-1">Terms and Conditions</a>
                  </label>
                </div>

                {/* Submit Button */}
                <div className="mt-12">
                  <button type="submit" className="w-max shadow-xl py-3 px-6 text-sm bg-yellow-400 text-gray-800 font-semibold rounded-md hover:bg-yellow-500 focus:outline-none">
                    Register
                  </button>
                  <Link to={"/login"}>
                    <p className="text-sm text-white mt-8">Already have an account? <a className="text-yellow-400 font-semibold hover:underline ml-1">Login here</a></p>
                  </Link>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Register;
