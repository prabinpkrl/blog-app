"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";

import { useParams } from "next/navigation";

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
  },
];

const BlogDetails = () => {
  const params = useParams();
  const id = params.id;

  const storedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
  const allPosts = [...storedPosts, ...defaultPosts];
  const blog = allPosts.find((post: any) => post.id === id);

  if (!blog) return <>Blog not foung</>;

  return (
    <div className="p-8">
      <Button className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        <Link href={`/editblog/${blog.id}`}>Edit</Link>
      </Button>
      <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
      <img
        src={blog.image.url}
        alt={blog.image.alt}
        className="w-96 h-64 object-cover mb-4"
      />
      <p className="text-lg">{blog.description}</p>
    </div>
  );
};

export default BlogDetails;
