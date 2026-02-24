import React from "react";
import Work from "../Components/Work";
import { personalDetails, workDetails, eduDetails } from "../Details";

function About() {
  return (
    <main className="container mx-auto max-width pt-20 pb-24 ">
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl xl:text-6xl xl:leading-tight font-bold text-insta-text mb-6">
          About Me
        </h1>
        <p className="text-insta-text-secondary py-6 lg:max-w-3xl leading-relaxed text-lg">{personalDetails.about}</p>
      </section>
      <section className="mb-16">
        <h1 className="text-4xl md:text-5xl xl:text-6xl xl:leading-tight font-bold text-insta-text mb-10">
          Work Experience
        </h1>
        {React.Children.toArray(
          workDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
      <section>
        <h1 className="text-4xl md:text-5xl xl:text-6xl xl:leading-tight font-bold text-insta-text mb-10">
          Education
        </h1>
        {React.Children.toArray(
          eduDetails.map(({ Position, Company, Location, Type, Duration }) => (
            <Work
              position={Position}
              company={Company}
              location={Location}
              type={Type}
              duration={Duration}
            />
          ))
        )}
      </section>
    </main>
  );
}

export default About;
