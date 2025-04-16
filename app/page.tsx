import { Button } from "@/components/ui/button";
import Link from "next/link";
import Image from "next/image";

export default function Page() {
  return (
    <div className="min-h-screen bg-gray-50">
      <nav className="flex items-center justify-between px-8 py-6 border-b shadow-sm bg-white">
        <h1 className="font-bold text-3xl text-gray-800">QuickBlog</h1>
        <Button
          variant="link"
          className="bg-gray-900 text-white hover:bg-gray-800"
        >
          <Link href="/login">Login</Link>
        </Button>
      </nav>

      <main className="flex flex-col-reverse md:flex-row items-center justify-between max-w-7xl mx-auto px-8 py-16">
        <div className="flex-1 mb-8 md:mb-0">
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 leading-tight mb-4">
            Today&apos;s Headlines: Stay <br /> Informed
          </h2>
          <p className="text-lg text-gray-600 mb-6 max-w-lg">
            Explore the latest news, insights, and tech trends from around the
            world. Stay ahead with Future Blog.
          </p>
          <Button variant="outline" className="px-6 py-3 text-base font-medium">
            <Link href="/login">Get Started</Link>
          </Button>
        </div>

        <div className="flex-1 flex justify-center">
          <Image
            src="/javascript.jpg"
            alt="News illustration"
            className="rounded-2xl shadow-lg"
            width={500}
            height={500}
            priority
          />
        </div>
      </main>
    </div>
  );
}
