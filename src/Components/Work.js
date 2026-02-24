import React from "react";

function Work({ position, company, location, type, duration }) {
  return (
    <article className="py-6 border-l-2 border-insta-gradient-pink pl-6 mb-8 relative transition-smooth hover:pl-8">
      <div className="absolute -left-[9px] top-6 w-4 h-4 rounded-full bg-insta-gradient-pink" />
      
      <div className="flex flex-col md:flex-row md:justify-between md:items-start gap-4 mb-3">
        <div>
          <h3 className="text-xl font-bold text-insta-text mb-1">
            {position}
          </h3>
          <p className="text-insta-gradient-pink font-semibold">
            {company}
          </p>
        </div>
        <div className="inline-block">
          <span className="bg-insta-gradient-pink/10 text-insta-gradient-pink text-xs font-bold px-3 py-1 rounded-full border border-insta-gradient-pink/30">
            {type}
          </span>
        </div>
      </div>

      <div className="flex flex-col md:flex-row md:gap-6 text-sm text-insta-text-secondary mb-2">
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M10.5 1.5H3.75A2.25 2.25 0 001.5 3.75v12.5A2.25 2.25 0 003.75 18.5h12.5a2.25 2.25 0 002.25-2.25V9.5" />
          </svg>
          {location}
        </div>
        <div className="flex items-center gap-2">
          <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
            <path d="M3.25 4h13.5c.957 0 1.75.793 1.75 1.75v9.5c0 .957-.793 1.75-1.75 1.75H3.25C2.293 17 1.5 16.207 1.5 15.25v-9.5C1.5 4.793 2.293 4 3.25 4z" />
          </svg>
          {duration}
        </div>
      </div>
    </article>
  );
}

export default Work;
