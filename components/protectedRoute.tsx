"use client";
import { useEffect } from "react";
import { redirect } from "next/navigation";
const ProtectedRoute = ({ children }) => {
  useEffect(() => {
    const IsLoggedIn = localStorage.getItem("isLoggedIn");

    if (!IsLoggedIn) {
      redirect("/");
    }
  }, []);

  return <>{children}</>;
};

export default ProtectedRoute;
