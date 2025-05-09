"use client";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";
import { defaultPosts } from "@/data/dummyblogs";
import { BlogPost } from "@/types/types";

import { redirect, useParams } from "next/navigation";
import { useEffect, useState } from "react";

const BlogDetails = () => {
  const params = useParams();
  const id = params.id;
  const [blog, setBlog] = useState<BlogPost | null>();

  useEffect(() => {
    const storedPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    const allPosts = [...storedPosts, ...defaultPosts];
    const foundBlog = allPosts.find((post) => post.id === id) || null;
    setBlog(foundBlog);
  }, [id]);

  if (!blog) return <>Blog not found</>;

  const handleDelete = (id: string) => {
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

      <div className="prose lg:prose-xl prose-slate text-gray-800">
        <div dangerouslySetInnerHTML={{ __html: blog.description }} />
      </div>
    </div>
  );
};

export default BlogDetails;
