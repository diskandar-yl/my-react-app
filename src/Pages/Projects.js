import React from "react";
import Project from "../Components/Project";
import { projectDetails } from "../Details";

function Projects() {
  return (
    <main className="container mx-auto max-width pt-20 pb-24">
      <section>
        <h1 className="text-4xl md:text-5xl xl:text-6xl xl:leading-tight font-bold text-insta-text mb-4">
          Portfolio
        </h1>
        <p className="text-insta-text-secondary text-lg mb-12">Explore some of my latest work and projects</p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {React.Children.toArray(
            projectDetails.map(
              ({ title, image, description, techstack, previewLink, githubLink }) => (
                <Project
                  title={title}
                  image={image}
                  description={description}
                  techstack={techstack}
                  previewLink={previewLink}
                  githubLink={githubLink}
                />
              )
            )
          )}
        </div>
      </section>
    </main>
  );
}

export default Projects;
