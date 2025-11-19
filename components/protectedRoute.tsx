"use client";
import { useEffect, useState, ReactNode } from "react";
import { useRouter } from "next/navigation";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  const router = useRouter();
  const [checking, setChecking] = useState(true);

  useEffect(() => {
    const checkAuth = async () => {
      try {
        const res = await fetch("/api/auth/me");
        if (!res.ok) {
          router.replace("/");
          return;
        }
        setChecking(false);
      } catch {
        router.replace("/");
      }
    };

    checkAuth();
  }, [router]);

  if (checking) {
    return null;
  }

  return <>{children}</>;
};

export default ProtectedRoute;
