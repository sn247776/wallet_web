import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import Heading from "@/components/ui/heading";
import CircleIconBtn from "@/components/wallet/circle-icon-btn";
import { ChevronRight, Crown } from "lucide-react";
import Image from "next/image";
import React from "react";

export default function Wallet() {
  return (
    <div>
      <Heading level={2}>Wallet</Heading>

      <div className="grid grid-cols-2 pt-8 gap-16">
        <div>
          <div className="grid grid-cols-3 gap-5">
            <div className="bg-card flex items-center justify-center flex-col gap-5 py-10 rounded-lg">
              <p className="text-xl font-semibold">Today’s Earnings</p>
              <h3 className="text-3xl font-bold">0.76</h3>
            </div>

            <div className="bg-card flex items-center justify-center flex-col gap-5 py-10 rounded-lg">
              <p className="text-xl font-semibold">Today’s Earnings</p>
              <h3 className="text-3xl font-bold">0.76</h3>
            </div>

            <div className="bg-card flex items-center justify-center flex-col gap-5 py-10 rounded-lg">
              <p className="text-xl font-semibold">Today’s Earnings</p>
              <h3 className="text-3xl font-bold">0.76</h3>
            </div>
          </div>

          <div className="flex flex-col gap-5 mt-16">
            <Button size={"lg"}>Recharge Balance</Button>

            <Button variant={"outline"} size={"lg"}>
              Withdraw Now
            </Button>
          </div>

          <div className="flex flex-col gap-5 mt-16">
            <div className="flex justify-between p-5 bg-card rounded-lg">
              <p>Film Investment</p> <ChevronRight />
            </div>
            <div className="flex justify-between p-5 bg-card rounded-lg">
              <p>Team Earnings</p> <ChevronRight />
            </div>
          </div>
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

          <div className="mt-16">
            <div className="flex justify-around">
              <CircleIconBtn
                icon={<Crown size={35} />}
                title="Account Record"
              />
              <CircleIconBtn
                icon={<Crown size={35} />}
                title="Account Record"
              />
              <CircleIconBtn
                icon={<Crown size={35} />}
                title="Account Record"
              />
            </div>
            <div className="flex justify-around mt-5">
              <CircleIconBtn
                icon={<Crown size={35} />}
                title="Account Record"
              />
              <CircleIconBtn
                icon={<Crown size={35} />}
                title="Account Record"
              />
              <CircleIconBtn
                icon={<Crown size={35} />}
                title="Account Record"
              />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
