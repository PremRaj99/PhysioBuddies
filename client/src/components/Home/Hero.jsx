import React from "react";

export default function Hero() {
  return (
    <div
      className={`md:pt-20 pt-40 text-white absolute left-0 top-0 z-0 w-screen min-h-72 bg-[url('https://novant.1onestrong.com/wp-content/uploads/2023/10/BG-03.jpg')] object-cover`}
    >
      <div className="flex flex-col lg:flex-row items-center justify-center gap-20">
        <div className="flex flex-col items-center justify-center gap-8">
          <h1 className="text-4xl md:text-6xl md:text-start text-center font-semibold w-[16ch]">
            We provide a huge range of clinical services to people
          </h1>
          <div className="flex items-center md:items-start gap-8">
            <button className="md:px-8 px-4 py-2 bg-lime-400 font-semibold text-black">
              Request an Appointment
            </button>
            <button className="md:px-8 px-4 py-2 border border-white font-semibold">
              Emergency Care
            </button>
          </div>
        </div>
        <img
          src="https://novant.1onestrong.com/wp-content/uploads/2023/10/Heros-03.png"
          className="w-96"
          alt=""
        />
      </div>
      <div className="w-full lg:w-[90vw] flex flex-col lg:flex-row items-start bg-slate-800 lg:p-0 p-4 mx-auto">
        <div className="flex-1 w-full">
          <div className="flex flex-col p-8 gap-8 items-start bg-gray-700">
            <div className="flex gap-8 items-center">
              <div className="w-2 h-10 bg-lime-400"></div>
              <h3 className="text-xl font-semibold hover:text-lime-400 duration-200 cursor-pointer">Appointments</h3>
            </div>
            <button className="px-6 py-2 bg-gray-500 flex gap-4 hover:bg-lime-400 hover:text-black duration-200">
              Make an Appointments
              <span>{">"}</span>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col p-8 gap-8 items-start bg-gray-800">
            <div className="flex gap-8 items-center">
              <div className="w-2 h-10 bg-lime-400"></div>
              <h3 className="text-xl font-semibold hover:text-lime-400 duration-200 cursor-pointer">Find a Doctor</h3>
            </div>
            <button className="px-6 py-2 bg-gray-500 flex gap-4 hover:bg-lime-400 hover:text-black duration-200">
              Find Doctors
              <span>{">"}</span>
            </button>
          </div>
        </div>
        <div className="flex-1">
          <div className="flex flex-col p-8 gap-8 items-start bg-gray-800">
            <div className="flex gap-8 items-center">
              <div className="w-2 h-10 bg-lime-400"></div>
              <h3 className="text-xl font-semibold hover:text-lime-400 duration-200 cursor-pointer">Parents & visitors</h3>
            </div>
            <button className="px-6 py-2 bg-gray-500 flex gap-4 hover:bg-lime-400 hover:text-black duration-200">
              Find out more
              <span>{">"}</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
