import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { Input } from "@/components/ui/input";
import Image from "next/image";
import React from "react";
import LoginAvtar from "@/assets/auth/login-avtar.png";
import Google from "@/assets/google.png";
import Link from "next/link";


export default function LoginPage() {
  return (
    <div style={{height:"calc(100vh - 100px)"}} className="flex items-center justify-center">
      <div className="grid grid-cols-2">
        <div>
          <form className="flex flex-col gap-5">
          <Heading level={3} className="my-10">
            Welcome back! Glad to see you, Again!
          </Heading>
            <Input type="email" placeholder="Enter your email" />
            <Input type="password" placeholder="Enter your password" />

            <br/>
            <Button size={"lg"} className="w-full">Login</Button>

            <div className="flex justify-center items-center gap-2">
              <div className="w-20 h-[2px] bg-white/70"></div>
              <p className="text-white/60">Or Login with</p>
              <div className="w-20 h-[2px] bg-white/70"></div>
            </div>

            <div className="flex justify-center gap-5 bg-white items-center text-black p-3 rounded-md font-semibold">
            <Image src={Google} alt="login-google" />
              <p>Continue with Google</p>
            </div>

            <p className="flex justify-center gap-2">
              Don’t have an account?
              <Link href={'/signup'} className="text-primary font-semibold">Register Now</Link>
            </p>
          </form>
        </div>

        <Image src={LoginAvtar} alt="login-avtar" />
      </div>
    </div>
  );
}
