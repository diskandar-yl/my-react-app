import React from "react";
function Footer() {
  return (
    <footer className="container mx-auto py-1 fixed bottom-0 md:left-20 bg-white dark:bg-dark-mode">
      <p className="text-xs text-center text-dark-content dark:text-light-content w-full">
        Designed and Coded by{" "}
        <a
          className="font-medium"
          href="https://diskandar-yl.github.io"
          target="_blank"
          rel="noreferrer noopener"
        >
          Diskandar-YL
        </a>{" "}
        with
        <span className="text-gradient font-medium"> HEART💚</span> -
        <span className="text-gradient font-medium"> TRAILBLAZERS🧭</span> - 
        <span className="text-gradient font-medium"> GROWTH🌱</span> -
        <span className="text-gradient font-medium"> HUMBLE&#128167;</span> -
        <span className="text-gradient font-medium"> GUARDIANS🌎</span>
      </p>
    </footer>
  );
}
export default Footer;
