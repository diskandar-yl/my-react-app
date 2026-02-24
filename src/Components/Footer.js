import React from "react";

function Footer() {
  const values = [
    { icon: "❤️", label: "Heart", color: "text-insta-gradient-pink" },
    { icon: "🧭", label: "Trailblazers", color: "text-insta-gradient-purple" },
    { icon: "🌱", label: "Growth", color: "text-insta-gradient-blue" },
    { icon: "🙏", label: "Humble", color: "text-yellow-400" },
    { icon: "🌎", label: "Guardians", color: "text-green-400" },
  ];

  return (
    <footer className="border-t border-insta-border bg-dark-mode/95 backdrop-blur-md mt-20">
      {/* Values Section */}
      <div className="container mx-auto max-width py-12">
        <div className="text-center mb-12">
          <h3 className="text-2xl font-bold text-insta-text mb-2">Our Values</h3>
          <p className="text-insta-text-secondary">Driven by principles that guide everything we do</p>
        </div>

        {/* Values Grid */}
        <div className="grid grid-cols-2 md:grid-cols-5 gap-4 md:gap-6 mb-12">
          {values.map((value, idx) => (
            <div
              key={idx}
              className="group p-4 rounded-lg border border-insta-border hover:border-insta-gradient-pink transition-all duration-300 hover:shadow-lg hover:shadow-pink-500/10 text-center"
            >
              <div className="text-4xl mb-3 group-hover:scale-110 transition-transform duration-300">
                {value.icon}
              </div>
              <p className={`font-bold text-lg mb-1 group-hover:${value.color} transition-colors ${value.color}`}>
                {value.label}
              </p>
              <div className="w-0 h-1 bg-insta-gradient-pink mx-auto group-hover:w-full transition-all duration-300" />
            </div>
          ))}
        </div>

        {/* Divider */}
        <div className="border-t border-insta-border my-8" />

        {/* Credit Section */}
        <div className="flex flex-col md:flex-row justify-between items-center gap-6 py-8">
          {/* Left: Designer Credit */}
          <div className="text-center md:text-left">
            <p className="text-insta-text-secondary text-sm">
              Designed & Developed with
              <span className="ml-2 inline-block animate-pulse">
                <span className="text-insta-gradient-pink font-bold">❤️ PASSION</span>
              </span>
            </p>
            <a
              href="https://diskandar-yl.github.io"
              target="_blank"
              rel="noopener noreferrer"
              className="text-insta-gradient-pink hover:text-insta-gradient-purple font-bold transition-colors mt-1 inline-block"
            >
              by Diskandar-YL
            </a>
          </div>

          {/* Center: Tech Stack */}
          <div className="text-center">
            <p className="text-insta-text-secondary text-xs uppercase tracking-widest font-semibold mb-2">
              Built With
            </p>
            <p className="text-insta-text text-xs font-light">
              React • Tailwind CSS • GSAP
            </p>
          </div>

          {/* Right: Year & Copyright */}
          <div className="text-center md:text-right">
            <p className="text-insta-text-secondary text-xs">
              © 2026 Porto Portfolio
            </p>
            <p className="text-insta-text-secondary text-xs font-light mt-1">
              Inspired by modern design excellence
            </p>
          </div>
        </div>

        {/* Bottom divider */}
        <div className="border-t border-insta-border mt-8 pt-8 text-center">
          <p className="text-insta-text-secondary text-xs">
            Built to inspire • Designed to impress • Crafted with precision
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
