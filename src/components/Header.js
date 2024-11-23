import React from "react";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <div className="text-center">
      <img
        alt="Profile"
        className="w-24 h-24 mx-auto rounded-full"
        src="/images/me.jpg"
      />
      <h1 className="mt-4 text-3xl font-bold text-white">Syamgith</h1>
      <p className="mt-2 text-gray-400">
        Hi, I am a software engineer. Building digital cosmic universe using c#
        and Js.
      </p>
      <SocialLinks />
    </div>
  );
};

export default Header;
