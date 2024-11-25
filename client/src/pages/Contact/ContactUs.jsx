import React from "react";
import physio from "../../assets/images/physio.gif";

export default function ContactUs() {
  document.addEventListener(
    "DOMContentLoaded",
    function () {
      const dateInput =
        document.getElementById("datePicker");
      const today = new Date()
        .toISOString()
        .split("T")[0];
      dateInput.min = today;
    }
  );

  return (
    <>
      <h2 className="text-2xl font-semibold text-green-950 text-center bg-green-50 pb-8">
        Contact Us
      </h2>

      {/* Contact Form */}
      <div className="bg-green-50 flex flex-wrap justify-center ">
        {/* Text Sention */}
        <div className="bg-green-100 w-auto md:w-1/2 px-8 py-4  text-gray-800">
          <h1 className="text-xl text-gray-700">
            BOOK ONLINE
          </h1>
          <h2 className="md:text-3xl text-2xl my-4 text-green-950 font-[SourGummy]">
            Relieve Pain, Restore Movement, Revive
            Your Life
          </h2>
          <span className="font-semibold">Physio Buddies</span> has helped
          countless individuals regain mobility and improve their quality of
          life through personalized physiotherapy treatments. Our licensed
          practitioners are available for:{" "}
          <ul className="list-disc hidden md:block px-5 py-2">
            <li>
              <span className="font-semibold">In-Clinic Sessions:</span>{" "}
              Conveniently located in your Locality.
            </li>
            <li>
              <span className="font-semibold">Home Visits:</span> We come to you
              for comfort and convenience.
            </li>
            <li>
              <span className="font-semibold">Virtual Appointments:</span> Ideal
              for remote locations or those who prefer private care from the
              comfort of their home.
            </li>
          </ul>
          <div className="w-full ">
            <img src={physio} alt="physio" className="sm:w-1/2 mx-auto w-4/5" />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-auto md:w-1/2 px-8 py-2">
          <form className="text-gray-800">
            <h3 className="text-xl md:text-2xl text-green-950 my-8">
              Ready to book an appointment with a licensed physiotherapist?
            </h3>
            <p className="text-base">
              Fill out the form below, and a member of our team will reach out
              to you shortly.
            </p>
            <div className="flex flex-col xl-custom:flex-row xl:items-center gap-2 my-4">
              <label>Full Name</label>
              <input
                type="text"
                id="name"
                className="flex-1 border-2 border-green-800 rounded-md px-2 py-1"
                placeholder="Full Name"
              />
              <label>Phone Number</label>
              <input
                type="telephone"
                id="name"
                className="flex-1 border-2 border-green-800 rounded-md px-2 py-1 ml-1"
                placeholder="+91 **********"
              />
            </div>
            <div className="flex flex-col gap-4 my-4">
              <label>Email</label>
              <label>Email</label>
              <input
                type="email"
                id="email"
                className="border-2 border-green-800 rounded-lg px-2 py-1 "
                placeholder="yourname@example.com"
              />
              <label>Please describe your injury or concern</label>
              <textarea
                name="describe"
                id=""
                className="border-2 border-green-800 rounded-md px-2 py-1"
                placeholder="Briefly describe why you need physiotherapy"
              />
              <div className="flex flex-wrap gap-2">
                <input
                  type="date"
                  id="datePicker"
                  className="border-2 border-green-950 rounded-xl w-full px-4 py-2"
                />

                <input
                  min="12:00"
                  max="18:00"
                  type="time"
                  name="time"
                  className="border-2 border-green-950 rounded-md px-2 py-1 "
                />
              </div>
            </div>
            <div className="flex justify-center my-8 p-2">
              <button className=" w-full  ease-in-out duration-300 bg-green-600 text-white px-4 py-2 rounded-3xl hover:text-green-950 hover:border hover:border-green-950 hover:bg-green-50">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
