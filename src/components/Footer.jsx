import React from "react";

const Footer = () => {
  return (
    <footer className="fixed bottom-0 left-0 w-full z-50 bg-black border-t border-green-500/20 text-green-400 py-3 px-2">
      <div className="flex justify-center items-center text-xs sm:text-sm text-center flex-wrap">
        <span>
          @ {new Date().getFullYear()}{" "}
          <span className="text-green-500">&lt;/&gt;</span> - Secure Password Manager -
        </span>
      </div>
    </footer>
  );
};

export default Footer;
