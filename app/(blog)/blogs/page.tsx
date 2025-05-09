"use client";

import { Button } from "@/components/ui/button";
import Card from "@/components/ui/card";
import Link from "next/link";
import { useRouter } from "next/navigation";
import ProtectedRoute from "@/components/protectedRoute";

const BlogHomePage = () => {
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("isLoggedIn");

    router.push("/");
  };

  return (
    <ProtectedRoute>
      <div className="min-h-screen bg-gray-50">
        <header className="sticky top-0 z-50 bg-white shadow-md">
          <nav className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
            <h1 className="text-3xl font-bold text-gray-900 tracking-tight">
              QuickBlog
            </h1>

            <div className="flex gap-3 items-center">
              <Link href="/createblog">
                <Button
                  variant="link"
                  className="bg-gray-800 hover:bg-gray-900 text-white font-medium px-5 py-2 rounded-lg transition-all"
                >
                  Create Blog
                </Button>
              </Link>
              <Button
                onClick={handleLogout}
                className="bg-red-500 hover:bg-red-600 text-white font-medium px-4 py-2 rounded-lg transition-all"
              >
                Logout
              </Button>
            </div>
          </nav>
        </header>

        <main className="max-w-7xl mx-auto px-6 py-10">
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
