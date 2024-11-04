import React from "react";
import GridPattern from "@/components/magicui/grid-pattern";
import Navbar from "@/components/shared/Navbar";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <GridPattern width={60} height={60} className="-z-10 opacity-60 " />
      <Navbar />
      {children}
    </>
  );
};

export default Layout;
