import React, { useState, useContext } from 'react'
import Logo from "../assets/vcart-logo.png";
import { useNavigate } from 'react-router-dom';
import google from "../assets/google.png"
import { IoEyeOutline, IoEye } from "react-icons/io5";
import axios from 'axios'
import { AuthDataContext } from '../context/authContext';

function Login() {
  const [show, setShow] = useState(false);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const { serverUrl } = useContext(AuthDataContext);
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post(
        serverUrl + "/api/auth/login",
        { email, password },
        { withCredentials: true }
      );

      alert("Login successful ✅");
      console.log(res.data);

      navigate("/"); // or dashboard

    } catch (error) {
      console.log(error);
      alert(error.response?.data?.message || "Login failed");
    }
  };

  return (
    <div className='w-[100vw] h-[100vh] bg-gradient-to-l from-[#141414] to-[#0c2025] text-white flex flex-col items-center justify-start'>

      {/* Header */}
      <div
        className='w-full h-[80px] flex items-center px-[30px] gap-[10px] cursor-pointer'
        onClick={() => navigate("/")}>
        <img className='w-[40px]' src={Logo} alt="logo" />
        <h1 className='text-[22px] font-sans'>OneCart</h1>
      </div>

      {/* Title */}
      <div className='w-full h-[100px] flex flex-col items-center justify-center gap-[10px]'>
        <span className='text-[25px] font-semibold'>Login Page</span>
        <span className='text-[16px]'>Welcome back to OneCart</span>
      </div>

      {/* Card */}
      <div className='max-w-[600px] w-[90%] h-[450px] bg-[#00000025] border border-[#96969635] backdrop-blur-2xl rounded-lg shadow-lg flex items-center justify-center'>

        <form
          onSubmit={handleLogin}
          className='w-[90%] h-[90%] flex flex-col gap-[20px]'>

          {/* Google */}
          <div className='w-full h-[50px] bg-[#42656cae] rounded-lg flex items-center justify-center gap-[15px] cursor-pointer'>
            <img src={google} alt="google" className='w-[20px]' />
            Login with Google
          </div>

          {/* OR */}
          <div className='flex items-center gap-[10px]'>
            <div className='w-[40%] h-[1px] bg-[#96969635]' />
            <span>OR</span>
            <div className='w-[40%] h-[1px] bg-[#96969635]' />
          </div>

          {/* Inputs */}
          <div className='flex flex-col gap-[15px] relative'>

            <input
              type="email"
              placeholder="Email"
              required
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className='w-full h-[50px] border-2 border-[#96969635] rounded-lg bg-transparent px-[20px] font-semibold placeholder-[#ffffffc7]'
            />

            <input
              type={show ? "text" : "password"}
              placeholder="Password"
              required
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              className='w-full h-[50px] border-2 border-[#96969635] rounded-lg bg-transparent px-[20px] font-semibold placeholder-[#ffffffc7]'
            />

            {show ? (
              <IoEye
                className="absolute right-[5%] top-[58%] cursor-pointer"
                onClick={() => setShow(false)}
              />
            ) : (
              <IoEyeOutline
                className="absolute right-[5%] top-[58%] cursor-pointer"
                onClick={() => setShow(true)}
              />
            )}

            <button className='w-full h-[50px] bg-[#6060f5] rounded-lg text-[17px] font-semibold mt-[10px]'>
              Login
            </button>

            <p className='flex gap-[10px] justify-center'>
              Don’t have an account?
              <span
                className='text-[#5555f6cf] font-semibold cursor-pointer'
                onClick={() => navigate("/register")}>
                New Registration
              </span>
            </p>

          </div>
        </form>
      </div>
    </div>
  )
}

export default Login;
