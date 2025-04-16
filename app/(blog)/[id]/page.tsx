"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { BlogPost } from "@/components/ui/card";

import { redirect, useParams } from "next/navigation";

const defaultPosts = [
  {
    id: "welcome-to-future-blog",
    title: "Welcome to Future Blog",
    description:
      "This is the very first post on Future Blog. Stay tuned for tech tips, tutorials, and future-ready ideas!",
    image: {
      url: "/file.svg",
      alt: "A futuristic digital illustration",
    },
    createdAt: "2025-1-1",
  },
  {
    id: "future-of-web-development",
    title: "The Future of Web Development",
    description:
      "Let’s explore the trends and tools shaping the future of website and app development.",
    image: {
      url: "/globe.svg",
      alt: "Modern web development illustration",
    },
    createdAt: "2025-1-1",
  },
  {
    id: "why-learning-javascript-is-important",
    title: "Why Learning JavaScript is Important",
    description:
      "JavaScript is everywhere! Here’s why it’s still the best language to start your programming journey.",
    image: {
      url: "/window.svg",
      alt: "JavaScript code on screen",
    },
    createdAt: "2025-1-1",
  },
  {
    id: "understanding-tailwind-css-basics",
    title: "Understanding Tailwind CSS Basics",
    description:
      "Simplify your styling process with Tailwind — the utility-first CSS framework that makes layout a breeze.",
    image: {
      url: "/file.svg",
      alt: "Tailwind CSS styled project example",
    },
    createdAt: "2025-1-1",
  },
  {
    id: "how-to-stay-motivated-as-a-developer",
    title: "How to Stay Motivated as a Developer",
    description:
      "Developer life can be challenging. Here are some easy ways to stay inspired and productive on your coding journey.",
    image: {
      url: "/globe.svg",
      alt: "Motivational quote on laptop",
    },
    createdAt: "2025-1-1",
  },
];

const BlogDetails = () => {
  const params = useParams();
  const id = params.id;

  const storedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
  const allPosts = [...storedPosts, ...defaultPosts];
  const blog = allPosts.find((post) => post.id === id);

  if (!blog) return <>Blog not foung</>;

  const handleDelete = (id: string) => {
    const deleted = JSON.parse(localStorage.getItem("deletedPosts") || "[]");

    if (!deleted.includes(id)) {
      deleted.push(id);
    }
    localStorage.setItem("deletedPosts", JSON.stringify(deleted));

    const storedPosts: BlogPost[] = JSON.parse(
      localStorage.getItem("blogPosts") || "[]"
    );
    const updatedPosts = storedPosts.filter((post) => post.id !== id);
    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));

    redirect("/Home");
  };

  return (
    <div className="max-w-4xl mx-auto p-6 md:p-10">
      <div className="flex justify-end space-x-3 mb-6">
        <Link href={`/editblog/${blog.id}`}>
          <Button className="bg-blue-600 text-white px-5 py-2 rounded-lg hover:bg-blue-700 transition duration-300">
            Edit
          </Button>
        </Link>

        <Button
          className="bg-red-600 text-white px-5 py-2 rounded-lg hover:bg-red-700 transition duration-300"
          onClick={() => handleDelete(blog.id)}
        >
          Delete
        </Button>
      </div>

      <h1 className="text-4xl font-extrabold text-gray-900 mb-2">
        {blog.title}
      </h1>

      {blog.createdAt && (
        <div className="text-gray-500 text-sm mb-6">
          Published on{" "}
          {new Date(blog.createdAt).toLocaleDateString("en-US", {
            year: "numeric",
            month: "long",
            day: "numeric",
          })}
        </div>
      )}

      {blog.image?.url && (
        <Image
          src={blog.image.url}
          alt={blog.image.alt || "Blog image"}
          width={800}
          height={400}
          className="rounded-xl shadow-lg mb-6 object-cover w-full max-h-[400px]"
        />
      )}

      {/* Blog Content */}
      <div className="prose lg:prose-xl prose-slate text-gray-800">
        <p>{blog.description}</p>
      </div>
    </div>
  );
};

export default BlogDetails;
