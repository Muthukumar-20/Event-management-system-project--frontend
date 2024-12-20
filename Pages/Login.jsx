import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import api from '../Services/localStorage.js'; // Make sure this API service is working correctly

const Login = ({ userDetails, setIsLoggedIn }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [userInformation, setUserInformation] = useState();
  const [showPassword, setShowPassword] = useState(false);
  const navigate = useNavigate();

  // Handle login form submission
  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await api.post("/auth/login", { email, password });
      
      if (response.data.token) {
        setUserInformation({
          token: response.data.token,
          userid: response.data.userid,
          email: response.data.email,
          role: response.data.role,
          name: response.data.name,
        });
        localStorage.setItem("userToken", response.data.token); // Store token in localStorage
        setIsLoggedIn(true); // Update the login state
        toast.success(response.data.message);
        
        // Call the userDetails function to update user info
        userDetails({
          token: response.data.token,
          userid: response.data.userid,
          email: response.data.email,
          role: response.data.role,
          name: response.data.name,
        });

        // Redirect to the home page
        setTimeout(() => {
          navigate("/"); 
        }, 1300);
      } else {
        toast.error("Login failed. Please try again!");
      }
    } catch (error) {
      toast.error("An error occurred. Please check your credentials.");
      console.error(error);
    }

    // Clear input fields
    setEmail("");
    setPassword("");
  };

  // Update userDetails when userInformation changes
  useEffect(() => {
    if (userInformation) {
      userDetails(userInformation);
    }
  }, [userInformation, userDetails]);

  return (
    <>
      <div className="bg-gradient-to-r from-blue-500 to-blue-700 px-8 py-12 h-[320px]">
        <div className="grid lg:grid-cols-2 gap-4 max-lg:gap-12">
          <div className="max-w-lg mt-16 max-lg:hidden">
            <h3 className="text-3xl font-bold text-white">Sign in</h3>
            <p className="text-sm mt-4 text-white">
              Embark on a seamless journey as you sign in to your account. Unlock a realm of opportunities and possibilities that await you.
            </p>
          </div>

          <div className="bg-white rounded-xl sm:px-6 px-4 py-8 max-w-md w-full h-max shadow-xl max-lg:mx-auto">
            <form onSubmit={handleSubmit}>
              <div className="mb-8">
                <h3 className="text-3xl font-extrabold text-gray-800">Sign in</h3>
              </div>
              <div className="sm:flex sm:items-start space-x-4 max-sm:space-y-4 mb-8">
                {/* Sign in buttons - These could be linked to actual OAuth services */}
                <button type="button" className="py-2.5 px-4 text-sm font-semibold rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none">
                  Sign in with Google
                </button>
                <button type="button" className="py-2.5 px-4 text-sm font-semibold rounded-md text-blue-500 bg-blue-100 hover:bg-blue-200 focus:outline-none">
                  Sign in with Facebook
                </button>
              </div>

              {/* Email Input */}
              <div>
                <label className="text-gray-800 text-sm mb-2 block">Email</label>
                <div className="relative flex items-center">
                  <input
                    name="email"
                    type="email"
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter your email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />
                </div>
              </div>

              {/* Password Input */}
              <div className="mt-4">
                <label className="text-gray-800 text-sm mb-2 block">Password</label>
                <div className="relative flex items-center">
                  <input
                    name="password"
                    type={showPassword ? "text" : "password"}
                    required
                    className="w-full text-sm text-gray-800 border border-gray-300 px-4 py-3 rounded-md outline-blue-600"
                    placeholder="Enter your password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    onClick={() => setShowPassword(!showPassword)}
                    className="w-[18px] h-[18px] absolute right-4 cursor-pointer"
                    fill="#bbb"
                    viewBox="0 0 128 128"
                  >
                    <path d="M64 104C22.127 104 1.367 67.496.504 65.943a4 4 0 0 1 0-3.887C1.367 60.504 22.127 24 64 24s62.633 36.504 63.496 38.057a4 4 0 0 1 0 3.887C126.633 67.496 105.873 104 64 104zM8.707 63.994C13.465 71.205 32.146 96 64 96c31.955 0 50.553-24.775 55.293-31.994C114.535 56.795 95.854 32 64 32 32.045 32 13.447 56.775 8.707 63.994zM64 88c-13.234 0-24-10.766-24-24s10.766-24 24-24 24 10.766 24 24-10.766 24-24 24zm0-40c-8.822 0-16 7.178-16 16s7.178 16 16 16 16-7.178 16-16-7.178-16-16-16z"></path>
                  </svg>
                </div>
              </div>

              {/* Forgot Password Link */}
              <div className="mt-4 text-right">
                <a href="javascript:void(0);" className="text-blue-600 text-sm font-semibold hover:underline">
                  Forgot your password?
                </a>
              </div>

              {/* Login Button */}
              <div className="mt-8">
                <button type="submit" className="w-full shadow-xl py-3 px-6 text-sm font-semibold rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none">
                  Log in
                </button>
              </div>

              {/* Register Link */}
              <p className="text-sm mt-8 text-center text-gray-800">
                Don't have an account? 
                <Link to={"/register"}>
                  <a href="javascript:void(0);" className="text-blue-600 font-semibold hover:underline ml-1 whitespace-nowrap">
                    Register here
                  </a>
                </Link>
              </p>
            </form>
          </div>
        </div>
      </div>

      <ToastContainer />
    </>
  );
};

export default Login;
