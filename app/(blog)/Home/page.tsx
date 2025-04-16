"use client";

import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Link from "next/link";
import ProtectedRoute from "@/components/protectedRoute";

const BlogHomePage = () => {
  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        {/* Sticky Header */}
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              Future Blog
            </h1>

            <Link href="/createblog">
              <Button
                variant="link"
                className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-5 py-2 rounded-lg transition-all"
              >
                Create Blog
              </Button>
            </Link>
          </nav>
        </header>

        {/* Main Content Area */}
        <main className="max-w-7xl mx-auto px-6 py-10">
          {/* Intro Section */}
          <section className="mb-8 text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-2">
              All Content
            </h2>
            <p className="text-gray-600 text-base md:text-lg">
              Browse the latest blogs on web development, technology, and
              programming tips. Stay updated with the future of tech!
            </p>
          </section>

          <Card />
        </main>
      </div>
    </ProtectedRoute>
  );
};
export default BlogHomePage;
