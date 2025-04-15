"use client";
import { redirect } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Link from "next/link";
import ProtectedRoute from "@/components/protectedRoute";

const BlogHomePage = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-100">
        <header className="m-1.5 p-2  bg-white">
          <nav className="flex justify-between p-1.5">
            <div className="text-3xl">Future Blog</div>
            <div>
              <Button variant="link" className="bg-gray-300 hover:bg-gray-500">
                <Link href="/createblog">Create Blog</Link>{" "}
              </Button>
            </div>
          </nav>
        </header>

        <main className="flex flex-col gap-1.5 m-1.5  p-1.5">
          <div className="bg-white text-3xl p-2 ">All Content</div>

          <Card />
        </main>
      </div>
    </ProtectedRoute>
  );
};
export default BlogHomePage;
