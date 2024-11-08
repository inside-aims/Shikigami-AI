"use client";

import React from "react";
import { ThemeSwitcher } from "./theme-switcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import Image from "next/image";
import { useUserState } from "@/lib/store/user";

const Navbar = () => {
  // get user profile data
  const user = useUserState((state: any) => state.user);
  console.log("user -> ", user);
  return (
    <div className=" container flex justify-between items-center py-5 md:!px-32">
      <div className="text-white">
        <Image src="/images/AIMS.png" width={60} height={60} alt="Logo image" />
      </div>
      <div className="text-white flex justify-center items-center gap-x-3">
        <div className=" flex flex-col gap-y-2">
          <Avatar>
            <AvatarImage src={user?.avatar_url} />
            <AvatarFallback>CN</AvatarFallback>
          </Avatar>
          <p className="text-sm tracking-tight text-default-400 text-black/50 dark:text-white">
            {user?.username}
          </p>
        </div>

        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
