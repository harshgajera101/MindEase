import { useState } from "react";
import type { FormEvent } from "react";
import { Mail, Lock, User } from "lucide-react";

export default function LoginSignup() {
  const [isLogin, setIsLogin] = useState<boolean>(true);

  // You can manage form data with state (optional for now)
  const [formData, setFormData] = useState<{
    username?: string;
    email: string;
    password: string;
    confirmPassword?: string;
  }>({
    email: "",
    password: "",
  });

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (isLogin) {
      console.log("Logging in with:", formData);
    } else {
      console.log("Signing up with:", formData);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gradient-to-br from-[#fdf6ec] to-[#f9f7f3] px-4">
      <div className="w-full max-w-md bg-white shadow-xl rounded-2xl p-8">
        {/* Tabs */}
        <div className="flex justify-center mb-6">
          <button
            type="button"
            className={`px-4 py-2 text-lg font-medium rounded-l-xl transition ${
              isLogin
                ? "bg-[#e8d9c9] text-amber-900"
                : "bg-gray-100 text-gray-500"
            }`}
            onClick={() => setIsLogin(true)}
          >
            Login
          </button>
          <button
            type="button"
            className={`px-4 py-2 text-lg font-medium rounded-r-xl transition ${
              !isLogin
                ? "bg-[#e8d9c9] text-amber-900"
                : "bg-gray-100 text-gray-500"
            }`}
            onClick={() => setIsLogin(false)}
          >
            Signup
          </button>
        </div>

        {/* Form */}
        <form className="space-y-4" onSubmit={handleSubmit}>
          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Username
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                <User className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="text"
                  placeholder="Enter your username"
                  className="w-full outline-none text-gray-700"
                  value={formData.username || ""}
                  onChange={(e) =>
                    setFormData({ ...formData, username: e.target.value })
                  }
                />
              </div>
            </div>
          )}

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <Mail className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="email"
                placeholder="Enter your email"
                className="w-full outline-none text-gray-700"
                value={formData.email}
                onChange={(e) =>
                  setFormData({ ...formData, email: e.target.value })
                }
                required
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
              <Lock className="h-5 w-5 text-gray-400 mr-2" />
              <input
                type="password"
                placeholder="Enter your password"
                className="w-full outline-none text-gray-700"
                value={formData.password}
                onChange={(e) =>
                  setFormData({ ...formData, password: e.target.value })
                }
                required
              />
            </div>
          </div>

          {!isLogin && (
            <div>
              <label className="block text-sm font-medium text-gray-700 mb-1">
                Confirm Password
              </label>
              <div className="flex items-center border border-gray-300 rounded-lg px-3 py-2">
                <Lock className="h-5 w-5 text-gray-400 mr-2" />
                <input
                  type="password"
                  placeholder="Re-enter your password"
                  className="w-full outline-none text-gray-700"
                  value={formData.confirmPassword || ""}
                  onChange={(e) =>
                    setFormData({
                      ...formData,
                      confirmPassword: e.target.value,
                    })
                  }
                  required
                />
              </div>
            </div>
          )}

          <button
            type="submit"
            className="w-full bg-[#e8d9c9] font-bold text-amber-900 font-semibold py-2 rounded-lg shadow-md hover:bg-[#d9c2a9] transition"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        {/* Divider */}
        <div className="flex items-center my-6">
          <hr className="flex-grow border-t border-gray-300" />
          <span className="mx-2 text-gray-400 text-sm">or</span>
          <hr className="flex-grow border-t border-gray-300" />
        </div>

        {/* Google Login */}
        <button
          type="button"
          className="w-full border border-gray-300 flex items-center justify-center py-2 rounded-lg hover:bg-gray-50 transition"
        >
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/4/4e/Gmail_Icon.png"
            alt="Google"
            className="h-5 w-5 mr-2"
          />
          Continue with Google
        </button>

        {/* Switch Auth */}
        <p className="text-center text-sm text-gray-600 mt-4">
          {isLogin ? (
            <>
              Don’t have an account?{" "}
              <span
                className="text-[#b08868] font-medium cursor-pointer hover:underline"
                onClick={() => setIsLogin(false)}
              >
                Signup
              </span>
            </>
          ) : (
            <>
              Already have an account?{" "}
              <span
                className="text-[#b08868] font-medium cursor-pointer hover:underline"
                onClick={() => setIsLogin(true)}
              >
                Login
              </span>
            </>
          )}
        </p>
      </div>
    </div>
  );
}
