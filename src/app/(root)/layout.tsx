import React from "react";
import GridPattern from "@/components/magicui/grid-pattern";
import Navbar from "@/components/shared/Navbar";

import { createClient } from "@/utils/supabase/server";
import InitUser from "@/lib/store/initUser";

const Layout = async ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  //  initialize supabase server client
  const supabase = createClient();

  // get current logged in auth account id
  const supabase_user_id: string | null =
    (await supabase.auth.getUser()).data?.user?.id ?? null;
  if (!supabase_user_id) {
    console.log("error in protected layout");
    return <></>;
  }

  // fetch the profile id user logged in
  const { data: profileUser } = await supabase
    .from("profiles")
    .select("*")
    .eq("supabase_user", supabase_user_id)
    .single();

  return (
    <>
      <GridPattern width={60} height={60} className="-z-10 opacity-60 " />
      <Navbar />
      {children}
      <InitUser user={profileUser} />
    </>
  );
};

export default Layout;
