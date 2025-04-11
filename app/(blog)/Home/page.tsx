"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";

const BlogHomePage = () => {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      redirect("/login");
    }
  }, []);

  return (
    <div>
      Welcome to homepage
      <div>welcome</div>
    </div>
  );
};
export default BlogHomePage;
