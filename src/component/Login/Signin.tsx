"use client";
import { useForm } from "react-hook-form";
import { useState } from "react";
import { useAuthStore } from "./login";
import { useRouter } from "next/navigation";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import { useAuthStoree } from "../Ustestore";

type LoginFormInputs = {
  email: string;
  password: string;
};

type SignupFormInputs = {
  email: string;
  password: string;
  confirmPassword: string;
};

export default function Signin() {
  const router = useRouter();
  const [isLogin, setIsLogin] = useState(true);
  const login = useAuthStore((state) => state.login);
  const [showPassword, setShowPassword] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginFormInputs | SignupFormInputs>();

  const onSubmitcoreee = async (data: any) => {
    const { email, password } = data;
    const { setIsLoggedIn, setCurrentUser } = useAuthStoree.getState();

    if (email === "admin@site.com" && password === "Admin$123") {
      login("admin");
      router.push("/admin");
      alert("Admin login successful ✅");
      return;
    }

    try {
      const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      const result = await res.json();
      // if (!res.ok) throw new Error(result.error || "User already exists");

      if (!res.ok) {
        if (isLogin && result.error?.toLowerCase().includes("not found")) {
          throw new Error("User does not exist");
        }
        throw new Error(
          result.error || (isLogin ? "User does not exist" : "User already exists")
        );
      }

      // ✅ Save user state in Zustand
      setIsLoggedIn(true);
      setCurrentUser({ email: result.user.email, role: "user" });

      localStorage.setItem("userEmail", result.user.email);
      alert(result.message);

      // ✅ Redirect back to Get Quotes if needed
      const redirectPath = localStorage.getItem("redirectAfterLogin");
      if (redirectPath) {
        localStorage.removeItem("redirectAfterLogin");
        router.push(redirectPath);
      } else {
        router.push("/");
      }
    } catch (err: any) {
      //catch (err: any) {      alert(err.message);      setServerError(err.message);}

      alert(err.message);
      if (err instanceof Error) {
        setServerError(err.message);
      } else {
        setServerError("An unexpected error occurred");
      }
    }
  };

  const onSubmit = async (data: LoginFormInputs | SignupFormInputs) => {
    setServerError(null);

    if (!isLogin && "confirmPassword" in data && data.password !== data.confirmPassword) {
      setServerError("Passwords do not match");
      return;
    }

    const endpoint = isLogin ? "/api/auth/login" : "/api/auth/signup";

    try {
      const res = await fetch(endpoint, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email: data.email, password: data.password }),
      });

      const result = await res.json();

      if (!res.ok) {
        setServerError(result.message || "Something went wrong");
        return;
      }

      console.log("Success:", result);
      // You can redirect or update UI here
    } catch (error: any) {
      setServerError(error.message || "Something went wrong");
    }
  };


  const [serverError, setServerError] = useState<string | null>(null);

  return (
    <div className="min-h-screen flex items-center justify-center bg-[#445370] ">
      <div className="bg-white p-6 rounded-lg shadow-lg w-96">
        <h2 className="text-2xl font-semibold text-center mb-4 text-black">
          {isLogin ? "Login" : "Signup"}
        </h2>

        <form
          onSubmit={handleSubmit(onSubmit)}
          method="POST"
          className="space-y-4"
        >
          {serverError && <p className="text-red-500 text-sm">{serverError}</p>}

          <input
            type="email"
            placeholder="Email"
            {...register("email", { required: "Email is required" })}
            className="w-full px-4 py-2 border rounded text-black border-black"
          />
          {errors.email && (
            <p className="text-red-500 text-sm">{errors.email.message}</p>
          )}

          <div className="flex flex-col gap-4">
            <div className="relative w-full">
              <input
                type={showPassword ? "text" : "password"}
                placeholder="Password"
                {...register("password", {
                  required: "Password is required",
                  pattern: {
                    value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                    message:
                      "Password must be at least 8 chars, include uppercase, lowercase, number & symbol",
                  },
                })}
                className="w-full px-4 py-2 border rounded border-black text-black"
              />
              <div
                className="absolute inset-y-0 right-3 flex items-center cursor-pointer text-black"
                onClick={() => setShowPassword((prev) => !prev)}
              >
                {showPassword ? <FaEyeSlash /> : <FaEye />}
              </div>
              {errors.password && (
                <p className="text-red-500 text-sm">
                  {errors.password.message}
                </p>
              )}
            </div>
            <div className="relative w-full text-black">
              {!isLogin && (
                <input
                  type={showPassword ? "text" : "password"}
                  placeholder="Confirm password"
                  {...register("confirmPassword", {
                    required: "Confirm password is required ",
                    pattern: {
                      value: /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W_]).{8,}$/,
                      message:
                        " ConfirmPassword must be at least 8 chars, include uppercase, lowercase, number & symbol",
                    },
                  })}
                  className="w-full px-4 py-2 border rounded border-black text-black"
                />
              )}
            </div>
          </div>
          <button
            type="submit"
            className="w-full bg-[#33accc] text-white py-2 rounded text-2xl font-semibold"
          >
            {isLogin ? "Login" : "Signup"}
          </button>
        </form>

        <p className="text-sm text-center mt-4 text-black">
          {isLogin ? "Don't have an account?" : "Already have an account?"}
          <button
            onClick={() => setIsLogin(!isLogin)}
            className="text-[#33accc] underline"
          >
            {isLogin ? "Signup" : "Login"}
          </button>
        </p>
      </div>
    </div>
  );
}
