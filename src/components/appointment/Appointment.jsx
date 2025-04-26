import React from 'react'

const Appointment = () => {
  return (
    <div>
      <div className="mt-10 bg-white p-16 rounded-lg shadow-lg">
        <iframe
          src="https://calendar.app.google/6n1JSdfCuqwb6Lpr5"
          style={{ border: "none" }}
          width="100%"
          height="1000"
          className="mx-auto"
        ></iframe>
      </div>
    </div>
  );
}

export default Appointment