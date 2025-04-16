import { BlogPost } from "@/types/types";

export const defaultPosts: BlogPost[] = [
  {
    id: "welcome-to-QuickBlog",
    title: "Welcome to QuickBlog",
    description: `
      <p>Welcome to <strong>QuickBlog</strong> — the space where curiosity meets innovation! Our mission is to empower developers and tech enthusiasts with practical knowledge, future-focused discussions, and thoughtful insights.</p>
      <p>Expect a variety of posts covering:</p>
      <ul>
        <li>Modern web development trends</li>
        <li>Hands-on tutorials with real-world examples</li>
        <li>Tips to help you stay productive and motivated as a developer</li>
      </ul>
      <p>We're excited to begin this journey with you. Make sure to bookmark our page and check back often for new articles and guides!</p>
    `,
    image: {
      url: "/file.svg",
      alt: "A futuristic digital illustration",
    },
    createdAt: "2025-1-1",
  },
  {
    id: "future-of-web-development",
    title: "The Future of Web Development",
    description: `
      <p>Web development is evolving faster than ever, thanks to new tools, frameworks, and concepts designed to make websites smarter, faster, and more reliable. The future of web development looks bright for those who embrace continuous learning.</p>
      <p>Some key trends include:</p>
      <ul>
        <li><strong>Server-Side Rendering (SSR) & Static Site Generation (SSG):</strong> delivering better performance and SEO results.</li>
        <li><strong>WebAssembly:</strong> bringing near-native speed to web applications, enabling new possibilities for games, video editing, and simulations in browsers.</li>
        <li><strong>AI-Assisted Coding:</strong> tools like GitHub Copilot are reshaping how developers write and refactor code.</li>
      </ul>
      <p>Staying relevant in the web world means staying curious and flexible. Keep building, keep learning!</p>
    `,
    image: {
      url: "/globe.svg",
      alt: "Modern web development illustration",
    },
    createdAt: "2025-1-1",
  },
  {
    id: "why-learning-javascript-is-important",
    title: "Why Learning JavaScript is Important",
    description: `
      <p><strong>JavaScript</strong> remains one of the most essential languages for anyone interested in modern software development. It is the engine behind the interactivity of the web and continues to expand beyond the browser.</p>
      <p>Here are a few reasons why you should learn JavaScript:</p>
      <ol>
        <li>It’s used everywhere — from client-side web applications to server-side (Node.js), mobile apps, desktop software, and even IoT devices.</li>
        <li>A massive ecosystem of frameworks and libraries, including <strong>React</strong>, <strong>Vue</strong>, <strong>Next.js</strong>, and <strong>Express</strong>.</li>
        <li>Strong job demand in both startups and tech giants around the world.</li>
      </ol>
      <p>Mastering JavaScript will give you the flexibility to build almost anything — from websites to full-scale applications.</p>
    `,
    image: {
      url: "/window.svg",
      alt: "JavaScript code on screen",
    },
    createdAt: "2025-1-1",
  },
  {
    id: "understanding-tailwind-css-basics",
    title: "Understanding Tailwind CSS Basics",
    description: `
      <p><strong>Tailwind CSS</strong> is a utility-first CSS framework that simplifies styling your web projects without writing custom CSS.</p>
      <p>Why developers love Tailwind:</p>
      <ul>
        <li>It speeds up the development process with its ready-to-use utility classes.</li>
        <li>It promotes consistent design systems across your entire application.</li>
        <li>It makes responsiveness easier with mobile-first utility variants.</li>
      </ul>
      <p>With Tailwind, you can style directly in your markup like this:</p>
      <pre>&lt;button class="bg-blue-500 text-white px-4 py-2 rounded"&gt;Click Me&lt;/button&gt;</pre>
      <p>Once you experience Tailwind’s productivity, it’s hard to go back!</p>
    `,
    image: {
      url: "/file.svg",
      alt: "Tailwind CSS styled project example",
    },
    createdAt: "2025-1-1",
  },
  {
    id: "how-to-stay-motivated-as-a-developer",
    title: "How to Stay Motivated as a Developer",
    description: `
      <p>The life of a developer can be both rewarding and exhausting. It’s normal to experience moments of frustration, especially when you encounter tough bugs or long learning curves.</p>
      <p>Here are some ways to stay motivated:</p>
      <ul>
        <li><strong>Break big goals into smaller tasks</strong> — Progress feels more achievable when you can check off small wins.</li>
        <li><strong>Join communities</strong> — Learning alongside others, sharing struggles, and celebrating wins can reignite your passion for coding.</li>
        <li><strong>Balance work and rest</strong> — Coding is creative but mentally intensive, so don't forget to recharge!</li>
      </ul>
      <p>Remember: every great developer once felt stuck too. Stay consistent, stay curious, and enjoy the process!</p>
    `,
    image: {
      url: "/globe.svg",
      alt: "Motivational quote on laptop",
    },
    createdAt: "2025-1-1",
  },
];
