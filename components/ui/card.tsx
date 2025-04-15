import { useEffect, useState } from "react";
import { Button } from "./button";
import Link from "next/link";

type BlogPost = {
  id: string;
  title: string;
  description: string;
  image: {
    url: string;
    alt: string;
  };
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

const Card = () => {
  const [userPosts, setUserPosts] = useState<BlogPost[]>([]);

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

      setUserPosts(filteredPosts);
    } catch (error) {
      console.error("Error:", error);
      setUserPosts([]);
    }
  }, []);
  const allPosts = [
    ...userPosts,
    ...defaultPosts.filter(
      (post) =>
        !JSON.parse(localStorage.getItem("deletedPosts") || "[]").includes(
          post.id
        )
    ),
  ];

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {allPosts.map((post, index) => (
        <div
          key={post.id ? post.id : `user-${index}`}
          className="bg-white rounded-2xl shadow-md overflow-hidden flex"
        >
          <img
            src={post.image.url}
            alt={post.image.alt}
            className="h-48 w-fit object-cover"
          />
          <div className="p-4 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <Button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
              <Link href={`/${post.id}`}>Read More</Link>
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
