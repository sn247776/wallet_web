import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import { CircleUserRound } from "lucide-react";
import React from "react";

export default function Profile() {
  return (
    <div>
      <Heading level={2}>Edit Profile</Heading>

      <div className="grid grid-cols-2 pt-8 gap-16">
        <div className="flex gap-3 flex-col">

            <div className="flex flex-col gap-3 border-b-2 p-2">
                <p className="text-white/75">Full Name</p>
                <div className="flex gap-3 text-xl"><CircleUserRound size={30} className="text-white/75" /><p>John Doe</p></div>
            </div>

            <div className="flex flex-col gap-3 border-b-2 p-2">
                <p className="text-white/75">Full Name</p>
                <div className="flex gap-3 text-xl"><CircleUserRound size={30} className="text-white/75" /><p>John Doe</p></div>
            </div>

            <div className="flex flex-col gap-3 border-b-2 p-2">
                <p className="text-white/75">Full Name</p>
                <div className="flex gap-3 text-xl"><CircleUserRound size={30} className="text-white/75" /><p>John Doe</p></div>           
            </div>

            <h6 className="text-center mt-16 text-white/75">Joined 04 March 2023</h6>
        </div>

        <div className="flex gap-5 flex-col">
          <div className="flex items-center justify-center flex-col gap-3">
            <Avatar className="w-44 h-44">
              <AvatarImage src="https://github.com/shadcn.png" />
              <AvatarFallback>CN</AvatarFallback>
            </Avatar>
            <h3 className="text-3xl font-bold">8769314565</h3>
            <p className="text-white/75">
              lv1 Next Level: 110/500.00 (Recharge)
            </p>
          </div>

        </div>
      </div>
    </div>
  );
}
