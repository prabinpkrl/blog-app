import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import Link from "next/link";
const Signup = () => {
  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded shadow-accent w-full max-w-sm">
        <h2 className="text-2xl font-bold mb-6 text-center">Sign Up</h2>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Name
          </label>
          <Input type="text" className="" placeholder="John Doe" />
        </div>

        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email
          </label>
          <Input type="email" className="" placeholder="you@example.com" />
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <Input type="password" className="" placeholder="••••••••" />
        </div>

        <Button
          variant="secondary"
          className="w-full bg-gray-700 text-white py-2 rounded hover:bg-gray-800 transition"
        >
          Sign Up
        </Button>

        <div className="mt-5">
          Already Have account.{" "}
          <Link href="/signin" className="underline">
            Sign in
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Signup;
