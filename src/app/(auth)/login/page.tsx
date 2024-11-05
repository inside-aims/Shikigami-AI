import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import LoginForm from "@/components/forms/LoginForm";
import { ThemeSwitcher } from "@/components/shared/theme-switcher";

const Login = () => {
  return (
    <BackgroundBeamsWithCollision className=" max-sm:px-5">
      <div className="absolute right-6 md:right-13 top-6">
        <ThemeSwitcher />
      </div>
      <LoginForm />
    </BackgroundBeamsWithCollision>
  );
};

export default Login;
