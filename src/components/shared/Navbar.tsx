import React from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";

const Navbar = () => {
  return (
    <div className=" container flex justify-between items-center py-10 !px-32">
      <div className="text-white">logo</div>
      <div className="text-white flex justify-center items-center gap-x-3">
        <Avatar>
          <AvatarImage src="https://github.com/shadcn.png" />
          <AvatarFallback>CN</AvatarFallback>
        </Avatar>

        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
