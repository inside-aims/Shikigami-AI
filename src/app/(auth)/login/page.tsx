import React from "react";
import { BackgroundBeamsWithCollision } from "@/components/ui/background-beams-with-collision";
import LoginForm from "@/components/forms/LoginForm";
import { ThemeSwitcher } from "@/components/shared/theme-switcher";

const Login = () => {
  return (
    <BackgroundBeamsWithCollision>
      <div className="absolute right-5 md:right-12 top-5">
        <ThemeSwitcher />
      </div>
      <LoginForm />
    </BackgroundBeamsWithCollision>
  );
};

export default Login;
