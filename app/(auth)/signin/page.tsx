"use client";

import Link from "next/link";
import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";
import { useEffect, useState } from "react";
import { redirect } from "next/navigation";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogIn = () => {
    let signupUser = JSON.parse(localStorage.getItem("user") || "");
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
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-accent w-1/2">
        <h2 className="text-2xl font-bold mb-6 text-center">Login</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input
            type="email"
            className=""
            placeholder="you@example.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <Input
            type="password"
            className=""
            placeholder="••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>

        <Button
          variant="secondary"
          className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition"
          onClick={handleLogIn}
        >
          Log In
        </Button>

        <div className="mt-5">
          Donot have accout create here.{" "}
          <Link href="/signup" className="underline">
            Sign up
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signin;
