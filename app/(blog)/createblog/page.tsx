import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
const CreateBlog = () => {
  return (
    <div className=" flex flex-col items-center justify-center min-h-screen bg-gray-100 p-4">
      <div className="bg-white rounded-lg shadow-md w-full max-w-2xl">
        <form className="">
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
              <Input type="text" id="title" placeholder="title" className="" />
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
                className="w-full px-3 py-2 border border-gray-300 rounded-md  focus:border-gray-400 focus:shadow-gray-500 min-h-[200px] "
              />
            </div>

            <div className="">
              <label
                htmlFor="image"
                className="block text-sm font-medium text-gray-700"
              >
                Add your image
              </label>
              <Input type="file" id="image" />
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
