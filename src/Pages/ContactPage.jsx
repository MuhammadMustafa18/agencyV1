import React, { useState, useEffect, useRef } from "react";

const ContactPage = () => {
  
  const openWhatsApp = () => {
    window.open(
      "https://wa.me/923178761858?text=Hi%20there%2C%20I%20have%20a%20question!",
      "_blank"
    );
  };
  return (
    <div className="pt-36 text-white bg-zinc-900 sm:min-h-screen sm:px-20 px-5 py-10">
      <h1 className="text-3xl font-bold mb-4">Contact Us</h1>
      <p className="text-lg">Email: mustafatariq365@protonmail.com</p>
      <p onClick={openWhatsApp} className="text-lg cursor-pointer">
        Phone: +92 317 8761858
      </p>
      <div className="mt-10 bg-white sm:p-16 rounded-lg shadow-lg">
        {/* https://calendar.google.com/calendar/u/0/appointments/schedules/AcZssZ0om3RM9dBy8bjz3ajQJDdqLF-0qVXttYJPqv6GpCx1zOr71XDJVnOIRV03Skv6TvgUdwQlcWgd */}
        <iframe
          src="https://calendar.app.google/L3VzFYtSVqEH3Fqf9"
          style={{ border: "none" }}
          width="100%"
          height="1000"
          className="w-full sm:mx-auto sm:h-[1000px] h-[600px]  "
        ></iframe>
      </div>
    </div>
  );
}

export default ContactPage