import { Button } from "./button";

const Card = () => {
  const blogPosts = [
    {
      id: 1,
      title: "How to Start with Tailwind",
      description:
        "A beginner-friendly guide on setting up Tailwind CSS for your projects.",
      image: "/file.svg",
    },
    {
      id: 2,
      title: "Understanding Grid in Tailwind",
      description:
        "Learn how to use the powerful CSS Grid system with Tailwind classes.",
      image: "/globe.svg",
    },
    {
      id: 3,
      title: "Mastering Flexbox with Tailwind",
      description:
        "Discover when to use flex over grid and how they complement each other.",
      image: "/window.svg",
    },
  ];

  return (
    <div className="grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 p-6">
      {blogPosts.map((post) => (
        <div
          key={post.id}
          className="bg-white rounded-2xl shadow-md overflow-hidden flex"
        >
          <img
            src={post.image}
            alt={post.title}
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
