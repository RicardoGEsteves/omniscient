"use client";

// import Image from "next/image";
import Link from "next/link";

import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

import { routes } from "@/constants/sidebar-constants";

export default function Sidebar() {
  const pathname = usePathname();
  return (
    <div className="space-y-4 py-4 flex flex-col h-full bg-[#111827] text-white">
      <div className="px-3 py-2 flex-1">
        <Link href="/dashboard" className="flex items-center pl-3 mb-14">
          <div className="relative w-8 h-8 mr-4">
            {/* TODO: create logo */}
            {/* <Image
              fill
              alt="logo"
              src="/logo.png
            "
            /> */}
            <h1 className="font-bold text-4xl ">
              O<span className="font-thin text-xs ">mniscient</span>
            </h1>
          </div>
        </Link>

        <div className="space-y-1">
          {routes.map((route) => (
            <Link
              href={route.href}
              key={route.href}
              className={cn(
                "text-sm group flex p-3 w-full justify-start font-medium cursor-pointer hover:text-white hover:bg-white/10 rounded-lg transition",
                pathname === route.href
                  ? "text-white bg-white/10"
                  : "text-zinc-400"
              )}
            >
              <div className="flex items-center flex-1">
                <route.icon className={cn("h-5 w-5 mr-3", route.color)} />
                {route.label}
              </div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
