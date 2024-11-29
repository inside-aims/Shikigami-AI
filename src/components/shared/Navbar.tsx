"use client";

import React, { useEffect } from "react";
import { useRouter } from "next/navigation";
import { ThemeSwitcher } from "./theme-switcher";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { User, LogOut, Podcast } from "lucide-react";
import Image from "next/image";
import { useUserState } from "@/lib/store/user";
import { getSupabaseBrowserClient } from "@/utils/supabase/client";

const Navbar = () => {
  const router = useRouter();
  // get user profile data
  const user = useUserState((state: any) => state.user);

  // initialize the supabase browser client
  const supabase = getSupabaseBrowserClient();

  // function to logout user
  const handleSignOut = async (
    e: React.MouseEvent<HTMLDivElement, MouseEvent>
  ) => {
    e.preventDefault();
    supabase.auth.signOut();
  };

  // Subscribe to sign out event
  useEffect(() => {
    const {
      data: { subscription },
    } = supabase.auth.onAuthStateChange((event, session) => {
      if (event === "SIGNED_OUT") {
        console.log("pushing...")
        router.push(`/login`);
      }
    });

    // end subscription event
    return () => {
      subscription.unsubscribe();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className=" container flex justify-between items-center py-5 md:!px-32">
      <div className="text-white">
        <Image src="/images/AIMS.png" width={60} height={60} alt="Logo image" />
      </div>
      <div className="text-white flex justify-center items-center gap-x-3">
        <div className="">
          <DropdownMenu>
            <DropdownMenuTrigger className=" cursor-pointer" asChild>
              <Avatar>
                <AvatarImage src={user?.avatar_url} />
                <AvatarFallback>CN</AvatarFallback>
              </Avatar>
            </DropdownMenuTrigger>
            <DropdownMenuContent>
              <DropdownMenuLabel className="flex justify-start items-center">
                <User />
                <span>{user?.username}</span>
              </DropdownMenuLabel>
              <DropdownMenuSeparator />
              <DropdownMenuItem className="hover:cursor-pointer">
                <Podcast />
                <span>Subscription</span>
              </DropdownMenuItem>
              <DropdownMenuItem className=" hover:cursor-pointer" onClick={handleSignOut}>
                <LogOut />
                <span>Logout</span>
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
        </div>

        <ThemeSwitcher />
      </div>
    </div>
  );
};

export default Navbar;
