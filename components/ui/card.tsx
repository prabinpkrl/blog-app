import { useEffect, useState } from "react";
import { Button } from "./button";

const Card = () => {
  const [posts, setPost] = useState([]);

  const blogPosts = [
    {
      id: 1,
      title: "Welcome to Future Blog",
      description:
        "This is the very first post on Future Blog. Stay tuned for tech tips, tutorials, and future-ready ideas!",
      image: {
        url: "/file.svg",
        alt: "A futuristic digital illustration",
      },
    },
    {
      id: 2,
      title: "The Future of Web Development",
      description:
        "Let’s explore the trends and tools shaping the future of website and app development.",
      image: {
        url: "/globe.svg",
        alt: "Modern web development illustration",
      },
    },
    {
      id: 3,
      title: "Why Learning JavaScript is Important",
      description:
        "JavaScript is everywhere! Here’s why it’s still the best language to start your programming journey.",
      image: {
        url: "/window.svg",
        alt: "JavaScript code on screen",
      },
    },
    {
      id: 4,
      title: "Understanding Tailwind CSS Basics",
      description:
        "Simplify your styling process with Tailwind — the utility-first CSS framework that makes layout a breeze.",
      image: {
        url: "/file.svg",
        alt: "Tailwind CSS styled project example",
      },
    },
    {
      id: 5,
      title: "How to Stay Motivated as a Developer",
      description:
        "Developer life can be challenging. Here are some easy ways to stay inspired and productive on your coding journey.",
      image: {
        url: "/globe.svg",
        alt: "Motivational quote on laptop",
      },
    },
  ];
  useEffect(() => {
    const newblogpost = JSON.parse(localStorage.getItem("blogPosts"));

    setPost(newblogpost);
  }, []);

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {posts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden flex"
        >
          <img src={post.image} className="h-48 w-fit object-cover" />
          <div className="p-4 flex flex-col justify-center">
            <h2 className="text-xl font-bold mb-2">{post.title}</h2>
            <p className="text-gray-600 mb-4">{post.description}</p>
            <Button className="bg-gray-500 text-white px-4 py-2 rounded hover:bg-gray-600 transition">
              Read More
            </Button>
          </div>
        </div>
      ))}

      {blogPosts.map((post) => (
        <div
          key={post.id}
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
              Read More
            </Button>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
