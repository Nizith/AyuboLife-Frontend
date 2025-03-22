import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Toaster, toast } from "react-hot-toast";

export default function Login() {
    const navigate = useNavigate();
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [forgotPassword, setForgotPassword] = useState(false);
    const [email, setEmail] = useState("");

    const handleLogin = (e) => {
        e.preventDefault();
        if (username === "user" && password === "user123") {
            toast.success("Login Successful!");
            setTimeout(() => {
                navigate("/dashboard");
            }, 2000);
        } else {
            toast.error("Invalid Credentials");
        }
    };

    const handleForgotPassword = (e) => {
        e.preventDefault();
        toast.success("Password reset link sent to your email");
    };
    return (
        <>
            <Toaster />
            <div className="flex justify-center items-center w-screen h-screen">
                {/* Login Form */}
                <div className="">
                    <div className="bg-white bg-opacity-30 border-2 my-auto rounded-3xl shadow-2xl p-5">
                        {!forgotPassword ? (
                            <form className="p-20 mt-3 font-bold" onSubmit={handleLogin}>
                                <h1 className="flex justify-center -mt-8 mb-5 text-3xl text-center font-serif">
                                    Ayubo Life Login Portal
                                </h1>
                                <div className="my-10">
                                    <input
                                        type="text"
                                        placeholder="Enter Username..."
                                        value={username}
                                        onChange={(e) => setUsername(e.target.value)}
                                        className="block w-full mx-auto mt-2 h-12 bg-slate-200 outline-none ring-1 focus:ring-2 ring-cyan-400 rounded-lg  ps-5 text-bl2ck font-normal"
                                    />
                                </div>
                                <div className="mb-5 relative">
                                    <input
                                        type="password"
                                        placeholder="Enter the Password..."
                                        value={password}
                                        onChange={(e) => setPassword(e.target.value)}
                                        className="block w-full mx-auto mt-2 h-12 bg-slate-200 outline-none ring-1 focus:ring-2 ring-cyan-400 rounded-lg  ps-5 text-bl2ck font-normal"
                                    />
                                </div>
                                <div className="flex justify-center">
                                    <button className="w-full h-12 text-xl mt-5 py-2 px-10 rounded-lg text-white duration-300 bg-cyan-600 hover:ring-2 ring-cyan-400 font-bold">
                                        Log In
                                    </button>
                                </div><p
                                    className="text-blue-600 text-sm text-center mt-3 -mb-4 cursor-pointer hover:underline"
                                    onClick={() => setForgotPassword(true)}
                                >
                                    Forgot Password?
                                </p>
                            </form>
                        ) : (
                            <form className="w-[4.5in] px-8 py-2" onSubmit={handleForgotPassword}>
                                <h1 className="mb-4 text-2xl font-bold text-center font-serif">Forgot Password</h1>
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    className="block w-full mx-auto mt-2 h-12 bg-slate-200 outline-none ring-1 focus:ring-2 ring-cyan-400 rounded-lg  ps-5 text-bl2ck font-normal"
                                />
                                <button
                                    type="submit"
                                    className="w-full h-12 text-xl mt-5 py-2 px-10 rounded-lg text-white duration-300 bg-cyan-600 hover:ring-2 ring-cyan-400 font-semibold"
                                >
                                    Reset Password
                                </button>
                                <p
                                    className="text-blue-600 text-sm text-center mt-3 cursor-pointer hover:underline font-semibold"
                                    onClick={() => setForgotPassword(false)}
                                >
                                    Back to Login
                                </p>
                            </form>
                        )}
                    </div>
                </div>
            </div>
        </>
    )
}

