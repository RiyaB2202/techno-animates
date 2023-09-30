import React from "react";
import "/public/contact_page.png";

function ContactUs() {
  return (
    <div className="flex items-left text-md">
      <div className="bg-black text-white p-8 ml-10">
        <div className="main mt-1">
          <h1 className="text-4xl font-bold mb-4 ">
            <span className="text-sm/10">GET IN TOUCH</span>
            <br />
            Contact.
          </h1>
        </div>
        <form>
          <div className="mb-3">
            <label className="block text-gray" htmlFor="name">
              Name
            </label>
            <input
              className="bg-black border-2 border-primary rounded-md w-60 px-4 py-1 text-white focus:outline-none focus:border-primary mt-1"
              type="text"
              id="name"
              placeholder="Your Name"
            />
          </div>
          <div className="mb-3">
            <label className="text-gray" htmlFor="contact">
              Contact
            </label>
            <br />
            <input
              className="bg-black border-2 border-primary rounded-md w-60 px-4 py-1 text-white focus:outline-none focus:border-primary mt-1"
              type="text"
              id="contact"
              placeholder="Your Contact"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray" htmlFor="email">
              Email
            </label>
            <input
              className="bg-black border-2 border-primary rounded-md  text-white focus:outline-none focus:border-primary mt-1 w-60 px-4 py-1"
              type="email"
              id="email"
              placeholder="Your Email"
            />
          </div>
          <div className="mb-4">
            <label className="block text-gray" htmlFor="message">
              Message
            </label>
            <textarea
              className="bg-black border-2 border-primary rounded-md text-white focus:outline-none focus:border-primary mt-1 px-4"
              id="message"
              rows="6"
              cols="30"
              placeholder="Type your message here"
            ></textarea>
          </div>
          <button
            className="bg-white text-button py-2 px-4  border-4 border-purple-500 border-x-purple-600 rounded-lg"
            type="submit"
          >
            Send
          </button>
        </form>
      </div>
      <div className="imageicon">
        <img src="contact_page.png" alt="svg" width="804" height="643" className=" ml-36" />
      </div>
    </div>
  );
}

export default ContactUs;
