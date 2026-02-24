import React from "react";
import { techStackDetails } from "../Details";

function Technologies() {
  const {
    html,
    css,
    js,
    react,
    redux,
    tailwind,
    bootstrap,
    sass,
    vscode,
    git,
    github,
    npm,
    postman,
    figma,
  } = techStackDetails;
  return (
    <main className="container mx-auto max-width pt-20 pb-24">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl xl:text-6xl xl:leading-tight font-bold text-insta-text mb-4">
          Tech Stack
        </h1>
        <p className="text-insta-text-secondary text-lg mb-12 lg:max-w-3xl">
          Technologies and tools I've been working with
        </p>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-6 md:gap-8 pt-6 mb-16">
        {[html, css, js, react, redux, tailwind, bootstrap, sass].map((tech, idx) => (
          <div key={idx} className="group">
            <img 
              src={tech} 
              alt={tech} 
              loading="lazy"
              className="w-full h-auto p-3 rounded-lg bg-dark-card border border-insta-border group-hover:border-insta-gradient-pink group-hover:shadow-lg group-hover:shadow-pink-500/20 transition-all duration-300" 
            />
          </div>
        ))}
      </section>
      <section className="mb-12">
        <h2 className="text-3xl md:text-4xl xl:text-5xl font-bold text-insta-text mb-8">
          Development Tools
        </h2>
      </section>
      <section className="grid grid-cols-4 md:grid-cols-5 lg:grid-cols-6 items-center gap-6 md:gap-8 pt-6">
        {[vscode, git, github, figma, npm, postman].map((tool, idx) => (
          <div key={idx} className="group">
            <img 
              src={tool} 
              alt={tool} 
              loading="lazy"
              className="w-full h-auto p-3 rounded-lg bg-dark-card border border-insta-border group-hover:border-insta-gradient-purple group-hover:shadow-lg group-hover:shadow-purple-500/20 transition-all duration-300" 
            />
          </div>
        ))}
      </section>
    </main>
  );
}

export default Technologies;
