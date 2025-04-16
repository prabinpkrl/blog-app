"use client";

import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BlogPost } from "@/components/ui/card";

const availbleimages = ["/file.svg", "/globe.svg", "/window.svg"];

const defaultPosts: BlogPost[] = [
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

const Editing = () => {
  const { id } = useParams();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const storedPosts: BlogPost[] =
      JSON.parse(localStorage.getItem("blogPosts") || "[]") || [];
    const combinedPosts = [...storedPosts, ...defaultPosts];

    const blogToEdit = combinedPosts.find((post) => post.id === id);

    if (blogToEdit) {
      setTitle(blogToEdit.title);
      setDescription(blogToEdit.description);
      setSelected(blogToEdit.image?.url || null);
    }
  }, [id]);

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const storedPosts: BlogPost[] = JSON.parse(
      localStorage.getItem("blogPosts") || "[]"
    );

    const existingPost = storedPosts.find((post) => post.id === id);

    let updatedPosts: BlogPost[];
    if (existingPost) {
      updatedPosts = storedPosts.map((post) =>
        post.id === id
          ? {
              ...post,
              title,
              description,
              image: {
                url: selected as string,
                alt: `${title} image`,
              },
            }
          : post
      );
    } else {
      updatedPosts = [
        ...storedPosts,
        {
          id: id as string,
          title,
          description,
          image: {
            url: selected as string,
            alt: `${title} image`,
          },
        },
      ];
    }

    localStorage.setItem("blogPosts", JSON.stringify(updatedPosts));
    redirect(`/${id}`);
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-2xl">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">Edit Blog Post</h2>
            <div className="hover:bg-gray-500 p-1 rounded-lg">
              <button
                type="button"
                onClick={() => redirect("/Home")}
                className="hover:underline"
              >
                close
              </button>
            </div>
          </div>

          <div className="p-6 space-y-6">
            <div className="space-y-2">
              <label
                htmlFor="title"
                className="block text-sm font-medium text-gray-700"
              >
                Title
              </label>
              <Input
                type="text"
                id="title"
                placeholder="title"
                value={title}
                onChange={(e) => setTitle(e.target.value)}
              />
            </div>

            <div className="space-y-2">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700"
              >
                Description
              </label>
              <textarea
                id="description"
                placeholder="Write your blog content here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md focus:border-gray-400 focus:shadow-gray-500 min-h-[200px]"
              />
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">
                Select Image
              </label>
              <div className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-2">
                {availbleimages.map((image, index) => (
                  <div
                    key={index}
                    className={`relative rounded-md overflow-hidden border-2 ${
                      selected === image
                        ? "border-gray-800"
                        : "border-transparent"
                    }`}
                    onClick={() => setSelected(image)}
                  >
                    <Image
                      src={image}
                      alt="image"
                      width={500}
                      height={300}
                      className="w-full object-cover h-32"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>

          <div className="p-6 border-t border-gray-200">
            <Button
              variant="secondary"
              type="submit"
              className="w-full text-xl hover:bg-gray-300 text-gray-700"
            >
              Save Changes
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Editing;
