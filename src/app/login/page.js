'use client'

import { useState } from 'react';
import { Eye, EyeOff } from "lucide-react";

export default function Login() {
  const [showPassword, setShowPassword] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLogin = () => {
    console.log('Login attempted with:', { email, password });
  };

  return (
    <div className="min-h-screen bg-[#3E076C] grid grid-cols-1 lg:grid-cols-2 gap-8 p-20">
      <div className="flex flex-col justify-center text-white space-y-6 pl-10">
        <h1 className="font-rajdhani text-9xl font-bold tracking-tight">
          LedgerFlow
        </h1>
        <p className="font-poppins text-[#FFBF47] text-3xl leading-relaxed">
          AI-Powered Financial Control. <br></br>
          Secure, simple budgeting fueled by <br></br>
          automation and transparent data.
        </p>
      </div>

      <div className="flex flex-col justify-center pr-10">
        <div className="font-poppins p-10 space-y-6">
          <div className="text-white space-y-2">
            <h2 className="text-3xl font-bold">Welcome Back!</h2>
            <p className="text-white/80 text-lg">
              Sign in to track your score and automate your budgeting.
            </p>
          </div>

          <div className="space-y-5">
            <div className="space-y-2">
              <label className="text-white text-lg font-semibold block">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="abcdefghijk@gmail.com"
                className="w-full px-4 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF47]"
              />
            </div>

            <div className="space-y-2">
              <label className="text-white text-lg font-semibold block">
                Password
              </label>
              <div className="relative">
                <input
                  type={showPassword ? "text" : "password"}
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Inmoprstu"
                  className="w-full px-4 py-4 rounded-lg bg-white text-gray-800 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-[#FFBF47]"
                />
                <button
                type="button"
                onClick={() => setShowPassword(!showPassword)}
                className="absolute right-3 top-1/2 -translate-y-1/2 text-gray-600 hover:text-gray-800"
                >
                {showPassword ? <EyeOff size={20} /> : <Eye size={20} />}
                </button>
              </div>
            </div>

            <div className="text-right">
              <button
                type="button"
                className="text-[#FFBF47] text-lg font-semibold hover:underline"
              >
                Forgot Password
              </button>
            </div>

            <button
              onClick={handleLogin}
              className="w-full bg-[#FFBF47] text-[#3E076C] text-lg font-semibold py-3 rounded-lg hover:bg-[#FFD073] transition-colors duration-200"
            >
              Login
            </button>

            <div className="text-lg text-white mt-4">
              Don't have an account?{' '}
              <button
                type="button"
                className="text-[#FFBF47] font-semibold hover:underline"
              >
                Sign Up
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}