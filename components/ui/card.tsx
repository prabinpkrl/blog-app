import { useEffect, useState } from "react";
import { Button } from "./button";
import Link from "next/link";
import Image from "next/image";
import { BlogPost, defaultPosts } from "@/data/dummyblogs";

const Card = () => {
  const [allPosts, setAllPosts] = useState<BlogPost[]>([]);

  useEffect(() => {
    try {
      let storedPosts: BlogPost[] = JSON.parse(
        localStorage.getItem("blogPosts") || "null"
      );

      // if nothing in localStorage, store defaults
      if (!storedPosts) {
        localStorage.setItem("blogPosts", JSON.stringify(defaultPosts));
        storedPosts = defaultPosts;
      }

      // Sort by createdAt - newest first
      const sortedPosts = [...storedPosts].sort((a, b) => {
        const dateA = new Date(a.createdAt ?? 0).getTime();
        const dateB = new Date(b.createdAt ?? 0).getTime();
        return dateB - dateA;
      });

      setAllPosts(sortedPosts);
    } catch (error) {
      console.error("Error:", error);
      setAllPosts(defaultPosts);
    }
  }, []);

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {allPosts.map((post, index) => (
        <div
          key={post.id ? post.id : `user-${index}`}
          className="bg-white rounded-xl shadow-md hover:shadow-lg transition duration-300 overflow-hidden flex flex-row border border-gray-100"
        >
          {post.image?.url && (
            <div className="w-1/3 h-auto max-h-48 overflow-hidden">
              <Image
                src={post.image.url}
                alt={post.image.alt || "Blog image"}
                width={200}
                height={200}
                className="w-full h-full object-cover transition-transform duration-300 hover:scale-105"
              />
            </div>
          )}

          <div className="p-4 flex flex-col justify-between w-2/3">
            <div>
              <span className="text-xs text-gray-500">
                {post.createdAt
                  ? new Date(post.createdAt).toLocaleDateString("en-US", {
                      year: "numeric",
                      month: "long",
                      day: "numeric",
                    })
                  : "Date unknown"}
              </span>

              <h2 className="text-lg font-semibold text-gray-900 mb-1 line-clamp-2">
                {post.title}
              </h2>

              <p className="text-sm text-gray-600 mb-3 line-clamp-2">
                {post.description}
              </p>
            </div>

            <Link href={`/${post.id}`}>
              <Button className="bg-gray-700 hover:bg-gray-800 text-white w-full px-4 py-2 rounded-md transition">
                Read More
              </Button>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default Card;
