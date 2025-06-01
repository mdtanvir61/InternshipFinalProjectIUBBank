import React, { useState } from "react";
import { useAuth } from "../../Context/Context.jsx";
import { useNavigate } from "react-router-dom";

// Social icons (SVG)
const GoogleIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512">
                <path fill="#fbbd00" d="M120 256c0-25.367 6.989-49.13 19.131-69.477v-86.308H52.823C18.568 144.703 0 198.922 0 256s18.568 111.297 52.823 155.785h86.308v-86.308C126.989 305.13 120 281.367 120 256z" data-original="#fbbd00" />
                <path fill="#0f9d58" d="m256 392-60 60 60 60c57.079 0 111.297-18.568 155.785-52.823v-86.216h-86.216C305.044 385.147 281.181 392 256 392z" data-original="#0f9d58" />
                <path fill="#31aa52" d="m139.131 325.477-86.308 86.308a260.085 260.085 0 0 0 22.158 25.235C123.333 485.371 187.62 512 256 512V392c-49.624 0-93.117-26.72-116.869-66.523z" data-original="#31aa52" />
                <path fill="#3c79e6" d="M512 256a258.24 258.24 0 0 0-4.192-46.377l-2.251-12.299H256v120h121.452a135.385 135.385 0 0 1-51.884 55.638l86.216 86.216a260.085 260.085 0 0 0 25.235-22.158C485.371 388.667 512 324.38 512 256z" data-original="#3c79e6" />
                <path fill="#cf2d48" d="m352.167 159.833 10.606 10.606 84.853-84.852-10.606-10.606C388.668 26.629 324.381 0 256 0l-60 60 60 60c36.326 0 70.479 14.146 96.167 39.833z" data-original="#cf2d48" />
                <path fill="#eb4132" d="M256 120V0C187.62 0 123.333 26.629 74.98 74.98a259.849 259.849 0 0 0-22.158 25.235l86.308 86.308C162.883 146.72 206.376 120 256 120z" data-original="#eb4132" />
    </svg>
);

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" class="w-6 h-6" viewBox="0 0 512 512">
                <path fill="#1877f2" d="M512 256c0 127.78-93.62 233.69-216 252.89V330h59.65L367 256h-71v-48.02c0-20.25 9.92-39.98 41.72-39.98H370v-63s-29.3-5-57.31-5c-58.47 0-96.69 35.44-96.69 99.6V256h-65v74h65v178.89C93.62 489.69 0 383.78 0 256 0 114.62 114.62 0 256 0s256 114.62 256 256z" data-original="#1877f2" />
                <path fill="#fff" d="M355.65 330 367 256h-71v-48.021c0-20.245 9.918-39.979 41.719-39.979H370v-63s-29.296-5-57.305-5C254.219 100 216 135.44 216 199.6V256h-65v74h65v178.889c13.034 2.045 26.392 3.111 40 3.111s26.966-1.066 40-3.111V330z" data-original="#ffffff" />
  </svg>
);

const GithubIcon = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none">
    <circle cx="12" cy="12" r="12" fill="#181717"/>
    <path fill="#fff" d="M12 5.3c-3.7 0-6.7 3-6.7 6.7 0 3 2 5.5 4.7 6.4.3.1.4-.1.4-.3v-1.1c-1.9.4-2.3-.8-2.3-.8-.3-.7-.7-.9-.7-.9-.6-.4 0-.4 0-.4.7 0 1 .7 1 .7.6 1 1.6.7 2 .5.1-.4.2-.7.4-.9-1.5-.2-3-.7-3-3.2 0-.7.2-1.2.6-1.7-.1-.2-.3-.8.1-1.6 0 0 .5-.2 1.7.7.5-.1 1-.2 1.5-.2s1 .1 1.5.2c1.2-.9 1.7-.7 1.7-.7.4.8.2 1.4.1 1.6.4.5.6 1 .6 1.7 0 2.5-1.5 3-3 3.2.2.2.4.5.4 1v1.5c0 .2.1.4.4.3 2.7-.9 4.7-3.4 4.7-6.4 0-3.7-3-6.7-6.7-6.7z"/>
  </svg>
);

const LoginForm = () => {
  const [showPassword, setShowPassword] = useState(false);
  const [form, setForm] = useState({ email: "", password: "" });
  const { login, googleLogin } = useAuth();
  const navigate = useNavigate();

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await login(form.email, form.password);
      navigate("/dashboard");
    } catch (err) {
      alert(err.message);
    }
  };

  const handleSocialLogin = async (provider) => {
    if (provider === "Google") {
      try {
        await googleLogin();
        navigate("/dashboard");
      } catch (err) {
        alert(err.message);
      }
    } else {
      alert(`Sign in with ${provider} not implemented`);
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
            Set Up Your Password
          </h2>
          <p className="text-gray-600 mb-8">
            Your security is our top priority. You’ll need this to log into your Iub Bank account
          </p>
        </div>
        <form onSubmit={handleSubmit} className="flex flex-col gap-5">
          <div>
            <label className="block font-semibold mb-1" htmlFor="email">
              Enter Your Email ID
            </label>
            <input
              className="w-full bg-[#f4faff] border border-blue-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
              type="email"
              id="email"
              name="email"
              placeholder="Your email ID here"
              value={form.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="relative">
            <label className="block font-semibold mb-1" htmlFor="password">
              Confirm Password
            </label>
            <input
              className="w-full bg-[#f4faff] border border-blue-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200 pr-12"
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
                  <path d="M1 12s4-7 11-7 11 7 11 7-4 7-11 7S1 12 1 12z" stroke="#222" strokeWidth="2"/>
                  <circle cx="12" cy="12" r="3" stroke="#222" strokeWidth="2"/>
                </svg>
              ) : (
                // Eye closed
                <svg width="22" height="22" fill="none" viewBox="0 0 24 24">
                  <path d="M17.94 17.94A10.94 10.94 0 0112 19c-7 0-11-7-11-7a21.77 21.77 0 014.22-5.94M9.53 9.53A3.001 3.001 0 0114.47 14.47M1 1l22 22" stroke="#222" strokeWidth="2"/>
                </svg>
              )}
            </button>
            <div className="flex justify-end mt-1">
              <a href="/reset" className="text-sm text-gray-500 hover:underline">
                Forgot Password?
              </a>
            </div>
          </div>
          <button
            type="submit"
            className="bg-[#1753c6] hover:bg-[#0a3bb8] text-white font-semibold px-10 py-3 rounded-full text-lg transition w-32 mt-2"
          >
            Login
          </button>
        </form>
        <div className="flex items-center my-6">
          <div className="flex-grow border-t border-gray-200"></div>
          <span className="mx-4 text-gray-400">or</span>
          <div className="flex-grow border-t border-gray-200"></div>
        </div>
        <div className="flex justify-center gap-4 mb-6">
          <button
            onClick={() => handleSocialLogin("Google")}
            className="border border-blue-100 rounded-full p-3 hover:bg-blue-50 transition"
            aria-label="Sign in with Google"
          >
            <GoogleIcon />
          </button>
          {/* <button
            onClick={() => handleSocialLogin("Facebook")}
            className="border border-blue-100 rounded-full p-3 hover:bg-blue-50 transition"
            aria-label="Sign in with Facebook"
          >
            <FacebookIcon />
          </button>
          <button
            onClick={() => handleSocialLogin("Github")}
            className="border border-blue-100 rounded-full p-3 hover:bg-blue-50 transition"
            aria-label="Sign in with Github"
          >
            <GithubIcon />
          </button> */}
        </div>
        <div className="text-center text-gray-600">
          Don't have an account?{" "}
          <a href="/register" className="text-[#1753c6] font-semibold hover:underline">
            Register
          </a>
        </div>
      </div>
    </section>
  );
};

export default LoginForm;