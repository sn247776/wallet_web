import { Button } from "@/components/ui/button";
import Link from "next/link";
import React from "react";

export default function LandingHeader() {
  return (
    <div className="flex justify-between items-center p-4">
      <Link href={"/"}>
        <div>Logo</div>
      </Link>
      <nav className="flex gap-10">
        <a>Home</a>
        <a>About</a>
        <a>Contact</a>
      </nav>
      <Link href={"/login"}>
        <Button>Login</Button>
      </Link>
    </div>
  );
}
