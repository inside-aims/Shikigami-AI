import React from "react";
import GridPattern from "@/components/magicui/grid-pattern";

const Layout = ({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) => {
  return (
    <>
      <GridPattern width={60} height={60} className="-z-10 opacity-60 " />
      {children}
    </>
  );
};

export default Layout;
