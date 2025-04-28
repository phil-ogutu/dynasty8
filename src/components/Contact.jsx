import React from "react";

const Contact = () => {
  return (
    <div className="text-center p-6 py-20 lg:32 w-full overflow-hidden" id="contact">
      <h1 className="text-2xl sm:text-4xl font:semibold text-center">
        Contact Us
      </h1>
      <p className="text-center text-gray-500 mb-12 max-w-80 m-auto">
        Found what you were looking for? Get in touch with us
      </p>
      <form className="max-w-2xl mx-auto text-gray-600 pt-4">
        <div className="flex flex-wrap">
          <div className="w-full md:w-1/2 text-left">
            Name
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="text"
              placeholder="Name"
            />
          </div>

          <div className="w-full md:w-1/2 text-left md:pl-4">
            Email
            <input
              className="w-full border border-gray-300 rounded py-3 px-4 mt-2"
              type="email"
              placeholder="Email"
            />
          </div>
        </div>

        <div className="text-left my-6">
          Message
          <textarea
            placeholder="Message"
            className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48"
          ></textarea>
        </div>
        <button className="bg-blue-600 text-white py-2 px-12 mb-10 rounded">
            Send Message
        </button>

      </form>
    </div>
  );
};

export default Contact;
