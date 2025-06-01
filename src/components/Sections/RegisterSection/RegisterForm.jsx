import React, { useState } from "react";
import { useAuth } from "../../Context/Context.jsx";
import { useNavigate } from "react-router-dom";

const RegisterForm = () => {
  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    password: "",
  });
  const [showPassword, setShowPassword] = useState(false);
  const [errors, setErrors] = useState({});
  const { register } = useAuth();
  const navigate = useNavigate();

  const validate = () => {
    const errs = {};
    if (!form.firstName || form.firstName.trim().length < 2) {
      errs.firstName = "First name is required.";
    }
    if (!form.lastName || form.lastName.trim().length < 2) {
      errs.lastName = "Last name is required.";
    }
    if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      errs.email = "Enter a valid email address.";
    }
    if (!form.password || form.password.length < 6) {
      errs.password = "Password must be at least 6 characters.";
    }
    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);
    if (Object.keys(validationErrors).length === 0) {
      try {
        await register(
          form.email,
          form.password,
          form.firstName,
          form.lastName
        );
        navigate("/dashboard");
      } catch (err) {
        setErrors({ email: err.message });
      }
    }
  };

  return (
    <section className="w-full min-h-screen flex items-center justify-center bg-white px-2 py-10">
      <div className="max-w-xl w-full mx-auto">
        <div className="mb-8">
          <div className="text-green-700 font-semibold text-lg mb-2">
            The Power of Financial Freedom
          </div>
          <h2 className="text-3xl md:text-5xl font-bold mb-3 text-[#0a2540]">
            Let’s Get Started!
          </h2>
          <p className="text-gray-600 mb-8">
            Please Enter your Email Address to Start your Online Application
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-1" htmlFor="firstName">
                First Name
              </label>
              <input
                className={`w-full bg-[#f4faff] border ${
                  errors.firstName ? "border-red-400" : "border-blue-100"
                } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.firstName ? "focus:ring-red-200" : "focus:ring-blue-200"
                }`}
                type="text"
                id="firstName"
                name="firstName"
                placeholder="Jone"
                value={form.firstName}
                onChange={handleChange}
                required
              />
              {errors.firstName && (
                <span className="text-red-500 text-sm">{errors.firstName}</span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="lastName">
                Last Name
              </label>
              <input
                className={`w-full bg-[#f4faff] border ${
                  errors.lastName ? "border-red-400" : "border-blue-100"
                } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.lastName ? "focus:ring-red-200" : "focus:ring-blue-200"
                }`}
                type="text"
                id="lastName"
                name="lastName"
                placeholder="Fisher"
                value={form.lastName}
                onChange={handleChange}
                required
              />
              {errors.lastName && (
                <span className="text-red-500 text-sm">{errors.lastName}</span>
              )}
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="email">
              Enter Your Email ID
            </label>
            <input
              className={`w-full bg-[#f4faff] border ${
                errors.email ? "border-red-400" : "border-blue-100"
              } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                errors.email ? "focus:ring-red-200" : "focus:ring-blue-200"
              }`}
              type="email"
              id="email"
              name="email"
              placeholder="Your email ID here"
              value={form.email}
              onChange={handleChange}
              required
            />
            {errors.email && (
              <span className="text-red-500 text-sm">{errors.email}</span>
            )}
          </div>
          <div className="relative">
            <label className="block font-semibold mb-1" htmlFor="password">
              Password
            </label>
            <input
              className={`w-full bg-[#f4faff] border ${
                errors.password ? "border-red-400" : "border-blue-100"
              } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                errors.password ? "focus:ring-red-200" : "focus:ring-blue-200"
              } pr-12`}
              type={showPassword ? "text" : "password"}
              id="password"
              name="password"
              placeholder="Enter Your Password"
              value={form.password}
              onChange={handleChange}
              required
            />
            <button
              type="button"
              className="absolute right-4 top-11 transform -translate-y-1/2 text-gray-500"
              onClick={() => setShowPassword((v) => !v)}
              tabIndex={-1}
            >
              {showPassword ? (
                // Eye open
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z"
                    stroke="#222"
                    strokeWidth="2"
                  />
                  <circle cx="12" cy="12" r="3" stroke="#222" strokeWidth="2" />
                </svg>
              ) : (
                // Eye closed
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path
                    d="M17.94 17.94A10.94 10.94 0 0112 19c-7 0-11-7-11-7a21.77 21.77 0 014.22-5.94M9.53 9.53A3.001 3.001 0 0114.47 14.47M1 1l22 22"
                    stroke="#222"
                    strokeWidth="2"
                  />
                </svg>
              )}
            </button>
            {errors.password && (
              <span className="text-red-500 text-sm">{errors.password}</span>
            )}
          </div>
          <div className="text-sm text-gray-600 mt-2">
            By clicking submit, you agree to&nbsp;
            <a href="#" className="text-blue-700 underline">
              IUB Bank’s Terms of Use
            </a>
            ,&nbsp;
            <a href="#" className="text-blue-700 underline">
              Privacy Policy
            </a>
            ,&nbsp;
            <a href="#" className="text-blue-700 underline">
              E-sign & communication Authorization
            </a>
            .
          </div>
          <button
            type="submit"
            className="bg-[#1753c6] hover:bg-[#0a3bb8] text-white font-semibold px-10 py-3 rounded-full text-lg transition w-40 mt-2"
          >
            Sign Up
          </button>
        </form>
      </div>
    </section>
  );
};

export default RegisterForm;