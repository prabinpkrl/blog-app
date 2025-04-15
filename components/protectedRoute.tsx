"use client";
import { useEffect, ReactNode } from "react";
import { redirect } from "next/navigation";

interface ProtectedRouteProps {
  children: ReactNode;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ children }) => {
  useEffect(() => {
    const IsLoggedIn = localStorage.getItem("isLoggedIn");

    if (!IsLoggedIn) {
      redirect("/");
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
