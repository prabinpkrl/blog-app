"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useState } from "react";
import { redirect } from "next/navigation";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const signupUser = JSON.parse(localStorage.getItem("user") || "[]");
    console.log(signupUser);
    if (email === signupUser.email && password === signupUser.password) {
      localStorage.setItem("isLoggedIn", "true");
      alert("login Sucessful");

      redirect("/Home");
    } else {
      alert("invalid");
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100 px-4">
      <div className="bg-white p-8 md:p-10 rounded-2xl shadow-lg w-full max-w-md">
        <h2 className="text-3xl font-bold mb-6 text-center text-gray-800">
          Welcome Back
        </h2>

        <form onSubmit={handleLogIn}>
          <div className="mb-4">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Email
            </label>
            <Input
              type="email"
              placeholder="you@example.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-700 mb-1">
              Password
            </label>
            <Input
              type="password"
              placeholder="••••••••"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
            />
          </div>

          <Button
            type="submit"
            variant="secondary"
            className="w-full bg-gray-700 text-white py-2 rounded-lg hover:bg-gray-800 transition-colors"
          >
            Log In
          </Button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          Don't have an account?{" "}
          <Link
            href="/signup"
            className="underline text-gray-800 hover:text-black"
          >
            Sign up here
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
