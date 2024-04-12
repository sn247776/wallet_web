"use client";
import { cn } from "@/lib/utils";
import { Gamepad2, Home, Users, Settings, Wallet, WalletMinimal } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import "./wallet-nav-bar.css"

const routes = [
  {
    label: "Home",
    icon: Home,
    href: "/wallet",

  },
  {
    label: "Deposit",
    icon: Wallet,
    href: "/deposit",

  },
  {
    label: "Withdraw",
    icon: WalletMinimal,

    href: "/withdraw",
  },
  {
    label: "Settings",
    icon: Settings,
    href: "/settings",
  },
];

function WalletBar() {
  const pathname = usePathname();

  return (
    <div className="wallet-main">
          <div className="wallet-bar-main">
      {routes.map((route) => (
        <Link
          key={route.href}
          href={route.href}
        >
          <div
            className={cn(
              "flex items-center flex-col ",
              pathname === route.href ? "active-bar-link" : "store-bar-link"
            )}
          >
            <route.icon className={cn("h-9 w-9")} />
            <p className="text-xs py-2">{route.label}</p>
          </div>
        </Link>
      ))}
    </div>
    </div>
  );
}

export default WalletBar;