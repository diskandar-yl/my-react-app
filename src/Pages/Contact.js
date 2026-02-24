import React from "react";
import { contactDetails } from "../Details";

function Contact() {
  const { email, phone } = contactDetails;
  return (
    <main className="container mx-auto max-width section flex flex-col items-center justify-center min-h-[60vh]">
      <h1 className="text-center text-3xl md:text-5xl lg:text-6xl text-insta-text font-bold mb-8 max-w-2xl">
        Let's Connect
      </h1>
      <p className="text-center text-insta-text-secondary text-lg md:text-xl mb-12 max-w-xl">
        Have a question or want to collaborate? Feel free to reach out!
      </p>
      
      <div className="flex flex-col md:flex-row gap-8">
        <a 
          href={`mailto:${email}`}
          className="btn-insta text-lg"
        >
          Send Email
        </a>
        <a 
          href={`tel:${phone}`}
          className="btn-insta-outline text-lg"
        >
          Call Me
        </a>
      </div>

      <div className="mt-16 text-center">
        <p className="text-insta-text-secondary mb-4 text-sm uppercase tracking-widest font-semibold">Contact Details</p>
        <p className="text-insta-text text-xl">
          <a href={`mailto:${email}`} className="hover:text-insta-gradient-pink transition-colors">{email}</a>
        </p>
        <p className="text-insta-text text-xl mt-2">
          <a href={`tel:${phone}`} className="hover:text-insta-gradient-pink transition-colors">{phone}</a>
        </p>
      </div>
    </main>
  );
}

export default Contact;
