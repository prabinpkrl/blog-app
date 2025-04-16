"use client";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { redirect } from "next/navigation";
import { useState } from "react";
import Image from "next/image";
import { availbleimages } from "@/data/availbleimages";

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [selected, setSelected] = useState<string | null>(null);

  const handleSubmit = (e: React.FocusEvent<HTMLFormElement>) => {
    e.preventDefault();

    if (!selected) {
      alert("Please select an image before publishing.");
      return;
    }
    console.log({ title, description });
    const existingPosts = JSON.parse(localStorage.getItem("blogPosts") || "[]");
    const slug = title
      .toLocaleLowerCase()
      .trim()
      .replace(/[^\w\s-]/g, "")
      .replace(/\s+/g, "-");

    const newblog = {
      id: slug,
      title,
      description,
      image: {
        url: selected,
        alt: `${title} preview image`,
      },
      createdAt: new Date().toISOString(),
    };

    localStorage.setItem(
      "blogPosts",
      JSON.stringify([...existingPosts, newblog])
    );
    redirect("/Home");
  };

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-2xl">
        <form onSubmit={handleSubmit}>
          <div className="flex justify-between p-6 border-b border-gray-200">
            <h2 className="text-2xl font-bold text-gray-800">
              Create New Blog Post
            </h2>
            <div className="hover:bg-gray-500 p-1 rounded-lg">
              <button className="hover:underline">close</button>
            </div>
          </div>

          <div className=" p-6 space-y-6">
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
                Description(You can write with HTML syntax)
              </label>
              <textarea
                id="description"
                placeholder="Write your blog content here..."
                value={description}
                onChange={(e) => setDescription(e.target.value)}
                className="w-full px-3 py-2 border border-gray-300 rounded-md  focus:border-gray-400 focus:shadow-gray-500 min-h-[200px] "
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
              Publish Blog Post
            </Button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default CreateBlog;
