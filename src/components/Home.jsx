import React from "react";

const Home = () => {
  return (
    <>
      {/* HERO SECTION */}
      <div className="pt-20 pb-16 text-green-400 flex justify-center px-4">
        <div className="max-w-5xl w-full text-center">

          {/* Title */}
          <h1 className="text-3xl sm:text-4xl font-bold mb-4 text-green-300 animate-fade-in">
            Secure. Simple. Smart.
          </h1>

          {/* Subtitle */}
          <p className="text-sm sm:text-base text-green-400/80 mb-8 max-w-2xl mx-auto">
            <span className="text-green-500">&lt;PassOP/&gt;</span> helps you store, manage and protect
            your passwords securely : all in one place.
          </p>

          {/* CTA */}
          <div className="flex justify-center gap-4">
            <a
              href="/manage"
              className="px-6 py-2 rounded-lg bg-green-500/10 border border-green-500/40 text-green-300 hover:bg-green-500/20 hover:text-green-200 transition"
            >
              Get Started
            </a>
          </div>
        </div>
      </div>

      {/* FEATURES SECTION */}
      <div className="flex justify-center pb-20 px-4">
        <div className="max-w-6xl w-full grid grid-cols-1 sm:grid-cols-3 gap-6">

          {/* Card 1 */}
          <div className="bg-black/70 border border-green-500/20 rounded-xl p-6 text-center shadow-lg shadow-green-500/10 hover:scale-[1.03] transition">
            <h3 className="text-green-300 text-lg mb-2">🔐 Secure Storage</h3>
            <p className="text-sm text-green-400/80">
              Your passwords are stored locally and never shared with anyone.
            </p>
          </div>

          {/* Card 2 */}
          <div className="bg-black/70 border border-green-500/20 rounded-xl p-6 text-center shadow-lg shadow-green-500/10 hover:scale-[1.03] transition delay-75">
            <h3 className="text-green-300 text-lg mb-2">⚡ Fast Access</h3>
            <p className="text-sm text-green-400/80">
              Quickly search, edit and manage all your credentials with ease.
            </p>
          </div>

          {/* Card 3 */}
          <div className="bg-black/70 border border-green-500/20 rounded-xl p-6 text-center shadow-lg shadow-green-500/10 hover:scale-[1.03] transition delay-150">
            <h3 className="text-green-300 text-lg mb-2">🧠 Simple UI</h3>
            <p className="text-sm text-green-400/80">
              Clean, distraction-free interface built for productivity.
            </p>
          </div>

        </div>
      </div>

      {/* FOOTER SPACER */}
      <div className="h-16"></div>
    </>
  );
};

export default Home;
