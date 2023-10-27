import React from "react";
const Contact = () => {
  return (
    <>
      <section id="contact" className="text-center py-20 bg-grey-300">
        <h1 className="text-2xl lg:text-3xl text-grey-100 uppercase ">
          Get in Touch!
        </h1>
        <div className="w-14 bg-grey-200 h-1 mt-2 mb-3 lg:mb-6 m-auto" />
        <p className="mb-6 lg:mb-10">
          Have a question or want to work together?
        </p>
        <div className="flex gap-3 justify-center">
          <img src="/email-icon.svg" alt="email icon" />
          <a
            className="text-grey-100 hover:underline hover:cursor-pointer hover:opacity-50 transition-all	"
            target="_blank"
            href="mailto:gabschlemper@gmail.com"
          >
            gabschlemper@gmail.com
          </a>
        </div>
        <div className="flex gap-3 justify-center mt-3">
          <img src="phone-icon.svg" alt="phone icon" />
          <div className="text-grey-100 hover:underline hover:cursor-pointer hover:opacity-50 transition-all	">
            +48 99803-2157
          </div>
        </div>
      </section>
    </>
  );
};

export default Contact;
