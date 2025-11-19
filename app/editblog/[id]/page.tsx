"use client";

import { useParams, useRouter } from "next/navigation";
import { useEffect, useState, type FormEvent } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import { BlogPost } from "@/types/types";
import { availbleimages } from "@/data/availbleimages";

const Editing = () => {
  const { id } = useParams();
  const router = useRouter();

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  useEffect(() => {
    const slug = String(id);

    const fetchBlog = async () => {
      try {
        const res = await fetch(`/api/posts/${slug}`);
        if (!res.ok) {
          router.replace("/blogs");
          return;
        }
        const data: BlogPost = await res.json();
        setTitle(data.title);
        setDescription(data.description);
        setSelected(data.image?.url || null);
      } catch (error) {
        router.replace("/blogs");
      }
    };

    if (id) {
      fetchBlog();
    }
  }, [id]);

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    const slug = String(id);

    try {
      const res = await fetch(`/api/posts/${slug}`, {
        method: "PUT",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          title,
          description,
          imageUrl: selected,
          imageAlt: `${title} image`,
        }),
      });

      if (!res.ok) {
        const data = await res.json().catch(() => null);
        alert(data?.message ?? "Failed to update blog post");
        return;
      }

      router.push(`/${slug}`);
    } catch (error) {
      alert("Something went wrong. Please try again.");
    }
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
                onClick={() => router.push("/blogs")}
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
