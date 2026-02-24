import React, { useRef, useEffect } from "react";
import gsap from "gsap";
import { personalDetails } from "../Details";

function Home() {
  const { name, tagline, img } = personalDetails;
  const h11 = useRef();
  const h12 = useRef();
  const h13 = useRef();
  const myimageref = useRef();
  useEffect(() => {
    const tl = gsap.timeline();
    tl.from(
      h11.current,
      {
        x: "-100%",
        delay: 0.8,
        opacity: 0,
        duration: 2,
        ease: "Power3.easeOut",
      },
      "<"
    )
      .from(
        h12.current,
        {
          x: "-100%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        h13.current,
        {
          x: "-100%",
          delay: 0.1,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      )
      .from(
        myimageref.current,
        {
          x: "200%",
          delay: 0.5,
          opacity: 0,
          duration: 2,
          ease: "Power3.easeOut",
        },
        "<"
      );
  }, []);

  return (
    <main className="container mx-auto max-width section md:flex justify-between items-center gap-12">
      <div className="flex-1">
        <h1
          ref={h11}
          className="text-4xl md:text-5xl xl:text-6xl xl:leading-tight font-bold text-insta-text mb-4"
        >
          Hi,👋
        </h1>
        <h1
          ref={h12}
          className="text-4xl md:text-5xl xl:text-6xl xl:leading-tight font-bold text-insta-gradient mb-6"
        >
          {name}
        </h1>
        <h2
          ref={h13}
          className="text-xl md:text-3xl xl:text-4xl xl:leading-tight font-semibold text-insta-text-secondary mb-8"
        >
          {tagline}
        </h2>
        <button className="btn-insta mt-6">
          Explore My Work
        </button>
      </div>
      <div className="mt-8 md:mt-0 flex-1" ref={myimageref}>
        <img 
          className="w-full rounded-2xl shadow-2xl shadow-insta-gradient-pink/30" 
          src={img} 
          alt="Iskandar-YL Profile" 
          loading="lazy"
        />
      </div>
    </main>
  );
}

export default Home;
