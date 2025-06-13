import React from "react";
import SocialLinks from "./SocialLinks";

const Header = () => {
  return (
    <div className="text-center space-y-6">
      <div className="relative group">
        <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-pink-600 rounded-full blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
        <img
          alt="Profile"
          className="relative w-32 h-32 mx-auto rounded-full border-4 border-gray-700 transition-transform duration-300 group-hover:scale-105"
          src="/images/me.jpg"
        />
      </div>

      <div className="space-y-3">
        <h1 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-400">
          Syamgith
        </h1>
        <p className="text-lg text-gray-300 max-w-2xl mx-auto leading-relaxed">
          Hi, I am a software engineer. Building digital cosmic universe using
          zeros and ones.
        </p>
      </div>

      <div className="pt-4">
        <SocialLinks />
      </div>
    </div>
  );
};

export default Header;
