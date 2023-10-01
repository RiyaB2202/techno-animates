import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-400 to-black text-white p-10 mt-10 pb-36 text-lg w-full">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <div>
            <p>&copy; 2023 by Technorate Animations</p>
          </div>
          <div>
            <a
              href="#"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              <img
                src="icons8-twitter-48.png"
                className="h-10 w-10 inline-block mr-4"
                alt="Twitter"
              />
            </a>
            <a
              href="#"
              className="hover:text-purple-600 transition-colors duration-300"
            >
              <img
                src="icons8-facebook-48.png"
                className="h-10 w-10 inline-block"
                alt="Facebook"
              />
            </a>
          </div>
        </div>
        <div className="flex  ">
          <p className="mt-3">&#128241; +91 - 8251936822</p>

          <p className="mt-3 ml-10 ">
            &#128231; technorateanimations@gmail.com
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
