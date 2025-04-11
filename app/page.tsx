import { Button } from "@/components/ui/button"
import Link from "next/link"

export default function Page(){
  return (
    <div className="m-1.5">
     <nav className="flex items-center justify-around mt-3 mb-3 px-6 py-4 border border-gray-500">
        <h1 className="font-semibold text-3xl">Future Blog</h1>
        <Button asChild>
        <Link href="/signin">Login</Link>
        </Button>
        
     </nav>

     <main className="flex flex-col ">
      <h2 className="text-5xl">Today's Headlines: Stay</h2>
      <div><span className="text-5xl">Informed </span> <span className="text-lg max-w-2xl mx-auto">Explore the latest news from around the world.</span></div>
      <Button variant="outline" className="w-fit mt-1.5">
        <Link href="/signin">Get started</Link>
        
      </Button>
     </main>

    </div>
  )
}