import React from "react";

function Project({ title, image, description, techstack, previewLink, githubLink }) {
  return (
    <article className="card-insta group overflow-hidden">
      <div className="relative overflow-hidden rounded-lg mb-4">
        <img 
          src={image} 
          alt={title}
          loading="lazy"
          className="w-full h-48 object-cover group-hover:scale-110 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors duration-300" />
      </div>
      
      <div className="p-0">
        <h3 className="text-xl font-bold text-insta-text mb-3 line-clamp-2 group-hover:text-insta-gradient-pink transition-colors">
          {title}
        </h3>
        <p className="text-insta-text-secondary text-sm font-light mb-4 line-clamp-3">
          {description}
        </p>
        <div className="mb-5 pb-4 border-b border-insta-border">
          <p className="text-xs uppercase tracking-wider text-insta-text-secondary font-semibold mb-2">
            Tech Stack
          </p>
          <p className="text-sm text-insta-text font-medium">
            {techstack}
          </p>
        </div>

        <div className="flex gap-3">
          <a
            href={previewLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-4 rounded-lg bg-insta-gradient text-white font-semibold text-sm text-center transition-all hover:shadow-lg hover:shadow-pink-500/40"
          >
            Live Demo
          </a>
          <a
            href={githubLink}
            target="_blank"
            rel="noopener noreferrer"
            className="flex-1 py-2 px-4 rounded-lg border border-insta-gradient-pink text-insta-gradient-pink font-semibold text-sm text-center transition-all hover:bg-insta-gradient-pink hover:text-white"
          >
            View Code
          </a>
        </div>
      </div>
    </article>
  );
}

export default Project;
