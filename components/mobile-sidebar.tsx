"use client";

import { Menu } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import Sidebar from "@/components/sidebar";

interface IMobileSidebarProps {
  apiLimitCount: number;
  isPro: boolean;
}

export default function MobileSidebar({
  apiLimitCount = 0,
  isPro = false,
}: IMobileSidebarProps) {
  return (
    <Sheet>
      <Button
        asChild
        variant="ghost"
        size="icon"
        className="md:hidden"
      >
        <SheetTrigger>
          <Menu />
        </SheetTrigger>
      </Button>

      <SheetContent
        side="left"
        className="p-0"
      >
        <Sidebar
          isPro={isPro}
          apiLimitCount={apiLimitCount}
        />
      </SheetContent>
    </Sheet>
  );
}
