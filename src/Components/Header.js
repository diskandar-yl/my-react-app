import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import { logos, socialMediaUrl } from "../Details";

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { linkdein, github, twitter } = socialMediaUrl;

  const menuItems = [
    { path: "/", label: "Home", icon: "🏠" },
    { path: "/about", label: "About", icon: "👤" },
    { path: "/technologies", label: "Technologies", icon: "⚙️" },
    { path: "/projects", label: "Projects", icon: "🚀" },
    { path: "/contact", label: "Contact", icon: "💬" },
  ];

  const socialLinks = [
    { href: twitter, icon: "twitter", label: "Twitter" },
    { href: linkdein, icon: "linkedin", label: "LinkedIn" },
    { href: github, icon: "github", label: "GitHub" },
  ];

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const closeMenu = () => {
    setIsOpen(false);
  };

  return (
    <header className="sticky top-0 z-50 border-b border-insta-border bg-dark-mode/95 backdrop-blur-md">
      <div className="container mx-auto max-width">
        <div className="flex justify-between items-center py-4">
          {/* Logo */}
          <NavLink 
            to="/" 
            onClick={closeMenu}
            className="transition-smooth hover:scale-110 flex-shrink-0"
          >
            <img className="w-14" src={logos.logogradient} alt="Porto Logo" />
          </NavLink>

          {/* Desktop Navigation */}
          <nav className="hidden md:flex items-center gap-1">
            <ul className="flex items-center gap-2">
              {menuItems.map((item) => (
                <li key={item.path}>
                  <NavLink
                    to={item.path}
                    className={({ isActive }) =>
                      `relative px-4 py-2 text-insta-text font-medium transition-smooth group flex items-center gap-1 ${
                        isActive ? "text-insta-gradient-pink" : "hover:text-white"
                      }`
                    }
                  >
                    <span>{item.icon}</span>
                    <span>{item.label}</span>
                    <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-insta-gradient-pink group-hover:w-full transition-all duration-300" />
                  </NavLink>
                </li>
              ))}
            </ul>

            {/* Desktop Social Links */}
            <div className="ml-6 pl-6 border-l border-insta-border flex gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.icon}
                  href={social.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  aria-label={social.label}
                  className="text-insta-text-secondary hover:text-insta-gradient-pink transition-smooth hover:scale-110 p-2 hover:bg-insta-border rounded-lg"
                >
                  {social.icon === "twitter" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                    </svg>
                  )}
                  {social.icon === "linkedin" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                      <circle cx="4" cy="4" r="2" />
                    </svg>
                  )}
                  {social.icon === "github" && (
                    <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                      <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.181.092-.916.35-1.544.636-1.9-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                    </svg>
                  )}
                </a>
              ))}
            </div>
          </nav>

          {/* Mobile Menu Button */}
          <button
            onClick={toggleMenu}
            className="md:hidden p-2 rounded-lg hover:bg-insta-border transition-smooth text-insta-text focus:outline-none focus:ring-2 focus:ring-insta-gradient-pink"
            aria-label={isOpen ? "Close menu" : "Open menu"}
            aria-expanded={isOpen}
          >
            <svg
              className={`w-6 h-6 transition-transform duration-300 ${isOpen ? "rotate-90" : ""}`}
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24"
            >
              {isOpen ? (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M6 18L18 6M6 6l12 12"
                />
              ) : (
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M4 6h16M4 12h16M4 18h16"
                />
              )}
            </svg>
          </button>
        </div>

        {/* Mobile Menu Panel */}
        {isOpen && (
          <>
            {/* Backdrop */}
            <div
              className="fixed inset-0 bg-black/50 backdrop-blur-sm md:hidden"
              onClick={closeMenu}
              aria-hidden="true"
            />

            {/* Mobile Menu */}
            <nav className="absolute top-full left-0 right-0 bg-dark-mode border-b border-insta-border md:hidden animate-in fade-in slide-in-from-top-2 duration-300">
              <div className="container mx-auto max-width">
                {/* Menu Items */}
                <ul className="flex flex-col py-2">
                  {menuItems.map((item, idx) => (
                    <li key={item.path}>
                      <NavLink
                        to={item.path}
                        onClick={closeMenu}
                        className={({ isActive }) =>
                          `flex items-center gap-3 px-6 py-4 border-l-2 transition-smooth ${
                            isActive
                              ? "border-insta-gradient-pink bg-insta-gradient-pink/5 text-insta-gradient-pink font-medium"
                              : "border-transparent text-insta-text hover:bg-insta-border/50"
                          } ${idx !== menuItems.length - 1 ? "border-b border-insta-border/50" : ""}`
                        }
                      >
                        <span className="text-2xl">{item.icon}</span>
                        <span className="font-medium">{item.label}</span>
                      </NavLink>
                    </li>
                  ))}
                </ul>

                {/* Social Links Divider */}
                <div className="border-t border-insta-border my-2" />

                {/* Mobile Social Links */}
                <div className="flex justify-around items-center py-4 px-6">
                  {socialLinks.map((social) => (
                    <a
                      key={social.icon}
                      href={social.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      aria-label={social.label}
                      className="text-insta-text-secondary hover:text-insta-gradient-pink transition-smooth hover:scale-110 p-3 hover:bg-insta-border rounded-lg"
                    >
                      {social.icon === "twitter" && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2s9 5 20 5a9.5 9.5 0 00-9-5.5c4.75 2.25 7-7 7-7" />
                        </svg>
                      )}
                      {social.icon === "linkedin" && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z" />
                          <circle cx="4" cy="4" r="2" />
                        </svg>
                      )}
                      {social.icon === "github" && (
                        <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                          <path fillRule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.49.5.092.682-.217.682-.482 0-.237-.008-.868-.013-1.703-2.782.603-3.369-1.343-3.369-1.343-.454-1.156-1.11-1.463-1.11-1.463-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.544 2.914 1.181.092-.916.35-1.544.636-1.9-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.025A9.578 9.578 0 0112 6.836c.85.004 1.705.114 2.504.336 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.942.359.31.678.921.678 1.856 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" clipRule="evenodd" />
                        </svg>
                      )}
                    </a>
                  ))}
                </div>
              </div>
            </nav>
          </>
        )}
      </div>
    </header>
  );
}

export default Header;
