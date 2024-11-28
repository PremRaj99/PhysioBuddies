import React from "react";

function AppointmentButton({text="Book Appointment"}) {
  return (
    <button className=" w-full ease-in-out duration-300 bg-[#15415c] text-white px-6 py-5 rounded-full hover:text-[#15415c] hover:border hover:border-[#15415c] hover:bg-blue-50 text-xl md:text-base">
      {text}
    </button>
  );
}

export default AppointmentButton;
