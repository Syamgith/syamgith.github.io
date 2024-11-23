import React from "react";

const SocialLinks = () => {
  const socialLinks = [
    {
      platform: "LinkedIn",
      icon: "fab fa-linkedin",
      color: "text-blue-500",
      url: "https://www.linkedin.com/in/syamgith",
    },
    {
      platform: "GitHub",
      icon: "fab fa-github",
      color: "text-gray-500",
      url: "https://github.com/syamgith",
    },
    {
      platform: "Pinterest",
      icon: "fab fa-pinterest",
      color: "text-red-500",
      url: "https://www.pinterest.com/syamgith",
    },
  ];

  return (
    <div className="flex justify-center mt-4 space-x-4">
      {socialLinks.map((social, index) => (
        <a
          key={index}
          className={`${social.color} text-2xl hover:opacity-75 transition-opacity`}
          href={social.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <i className={social.icon}></i>
        </a>
      ))}
    </div>
  );
};

export default SocialLinks;
