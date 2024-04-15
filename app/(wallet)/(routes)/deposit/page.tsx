"use client";
import Heading from "@/components/ui/heading";
import { Copy } from "lucide-react";
import React, { useState } from "react";

export default function Deposit() {
  const [walletAddress, setWalletAddress] = useState("amndajsksdew"); // Assuming your wallet address is stored in state

  const handleCopyWalletAddress = () => {
    navigator.clipboard
      .writeText(walletAddress)
      .then(() => {
        alert("Wallet address copied to clipboard!");
      })
      .catch((error) => {
        console.error("Failed to copy wallet address:", error);
        alert("Failed to copy wallet address. Please try again.");
      });
  };

  return (
    <div>
      <Heading level={2}>Deposit</Heading>

      <div className="grid grid-cols-2 pt-8 gap-16">
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-3">
            <p>Choose amount to deposit</p>
            <div className="flex justify-between p-5 bg-card rounded-lg text-white/75">
              <p>Deposit Type:</p>
              <p className="text-primary font-semibold">USDT</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p>Choose a coin</p>
            <div className="flex justify-between p-5 bg-card rounded-lg text-white/75">
              <p>Coin Type:</p>
              <p className="text-primary font-semibold">ERC20</p>
            </div>
          </div>

          <div className="flex flex-col gap-3">
            <p>Confirm deposit details</p>
            <div className="flex justify-between p-5 bg-card rounded-lg text-white/75">
              <p>Wallet Address:</p>
              <p className="text-primary font-semibold">{walletAddress}</p>
            </div>
            <div className="flex justify-end text-white/75">
              <div
                onClick={handleCopyWalletAddress}
                className="flex gap-2 cursor-pointer"
              >
                <Copy />
                copy
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="flex flex-col gap-3 mt-8">
            <h6 className="text-primary font-semibold text-xl">
              Deposit Instructions:
            </h6>

            <p>
              1. Please confirm whether Wallet address: is correct. If the
              information is incorrectly filled in, we will not be responsible
              for any loss of your insurance.
            </p>

            <p>
              2. If the deposit and withdrawal are nor received, please consult
              the helpline.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
