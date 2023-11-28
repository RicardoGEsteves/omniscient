import { Button } from "@/components/ui/button";
import { UserButton } from "@clerk/nextjs";
import { Menu } from "lucide-react";

export default function Navbar() {
  return (
    <div className="flex items-center p-4">
      <Button variant={"ghost"} size="icon" className="md:hidden">
        <Menu />
      </Button>

      <div className="flex w-full justify-end">
        <UserButton afterSignOutUrl="/" />
      </div>
    </div>
  );
}
