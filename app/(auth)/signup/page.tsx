"use client";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import Link from "next/link";

import { useState } from "react";
const Signup = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSignUp = () => {
    const user = { name, email, password };

    console.log(email, password, name);
    localStorage.setItem("user", JSON.stringify(user));

    localStorage.setItem("isLoggedIn", "true");
    alert("successfull");

    setTimeout(() => {
      redirect("/signin");
    }, 1000);
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-2xl shadow-accent w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <Input
            type="text"
            className=""
            placeholder="John Doe"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>

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
          onClick={handleSignUp}
        >
          Sign Up
        </Button>

        <div className="mt-5">
          Already Have account.{" "}
          <Link href="/signin" className="underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
