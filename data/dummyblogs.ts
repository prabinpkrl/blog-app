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
  
  export const defaultPosts: BlogPost[] = [
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
  