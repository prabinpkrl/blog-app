"use client";
import { redirect } from "next/navigation";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";

const BlogHomePage = () => {
  useEffect(() => {
    const isLoggedIn = localStorage.getItem("isLoggedIn");

    if (isLoggedIn !== "true") {
      redirect("/login");
    }
  }, []);

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="m-1.5 p-2 border border-gray-700 bg-white">
        <nav className="flex justify-between p-1.5 border border-gray-700">
          <div className="text-3xl">Future Blog</div>
          <div>
            <Button
              variant="secondary"
              className="bg-gray-300 hover:bg-gray-500"
            >
              Create Blog
            </Button>
          </div>
        </nav>
      </header>

      <main className="border border-gray-500 flex flex-col gap-1.5 m-1.5  p-1.5">
        <div className="border border-gray-500 bg-white">All Content</div>

        <Card />
      </main>
    </div>
  );
};
export default BlogHomePage;
