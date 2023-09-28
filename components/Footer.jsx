import React from "react";

function Footer() {
  return (
    <footer className="bg-gradient-to-b from-purple-400  to-red-270 text-white  p-10  mt-10 pb-36">
      <div className="container mx-auto">
        <div className="text-left">
          <p>&copy; 2023 by Technorate Animations</p>
          <p className="text-right">
            <a href="">
              <img
                src="icons8-twitter-48.png"
                className="h-10 w-10"
                alt="image"
              />
            </a>
          </p>
          <p>
            <a href="">
              <img src="icons8-facebook-48.png" className="h-10 w-10" alt="" />
            </a>
          </p>
          <p>&#128241; +91 - 8251936822</p>
          <p>&#128231;technorateanimations@gmail.com</p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
