import { useEffect, useState } from "react";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";

export type BlogPost = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
  createdAt?: string;
};

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

const Card = () => {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    const newBlogStored = localStorage.getItem("blogPosts");
    const deletedPostsStored = localStorage.getItem("deletedPosts");

    try {
      const parsed = newBlogStored ? JSON.parse(newBlogStored) : [];
      const deletedPosts = deletedPostsStored
        ? JSON.parse(deletedPostsStored)
        : [];

      const filteredPosts = parsed.filter(
        (post: BlogPost) => !deletedPosts.includes(post.id)
      );

      const merged = [
        ...filteredPosts,
        ...defaultPosts.filter((post) => !deletedPosts.includes(post.id)),
      ];

      setAllPosts(merged);
    } catch (error) {
      console.error("Error:", error);
      setAllPosts(defaultPosts);
    }
  }, []);

  // const allPosts = [
  //   ...userPosts,
  //   ...defaultPosts.filter(
  //     (post) =>
  //       !JSON.parse(localStorage.getItem("deletedPosts") || "[]").includes(
  //         post.id
  //       )
  //   ),
  // ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {allPosts.map((post, index) => (
        <div
          key={post.id ? post.id : `user-${index}`}
          className="bg-white rounded-lg shadow-sm hover:shadow-md transition-shadow duration-300 overflow-hidden flex flex-row border border-gray-100"
        >
          <div className=" relative w-full">
            <Image
              src={post.image.url}
              alt={post.image.alt}
              width={500}
              height={300}
              className="w-full h-full object-cover hover:scale-105"
              style={{ height: "100%", position: "absolute" }}
            />
          </div>

          <div className="p-5 flex flex-col flex-grow">
            <div className="flex items-center text-xs text-gray-500 mb-2">
              <span>
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Date unknown"}
              </span>
            </div>
            <h2 className="text-xl font-bold mb-2 text-gray-800 line-clamp-2">
              {post.title}
            </h2>
            <p className="text-gray-600 mb-4 flex-grow line-clamp-2">
              {post.description}
            </p>
            <Button className="bg-gray-700 hover:bg-gray-800 text-white px-4 py-2 rounded-md transition-colors duration-200 w-full">
              <Link
                href={`/${post.id}`}
                className="w-full inline-block text-center"
              >
                Read More
              </Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
