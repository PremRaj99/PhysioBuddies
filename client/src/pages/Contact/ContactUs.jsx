import React from "react";
import physio from "../../assets/images/Physio.gif";
import Button from "../../components/Common/Button";

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
      <div className="text-2xl font-semibold text-text-primary text-center bg-bg-secondary py-16">
        Contact Us
      </div>

      {/* Contact Form */}
      <div className="bg-bg-secondary flex flex-wrap justify-center ">
        {/* Text Sention */}
        <div className="bg-bg-primary w-auto md:w-1/2 pr-8 py-4 md:pl-16 pl-8 text-gray-800">
          {/* <div className="w-auto md:w-4/5"></div> */}
          <h1 className="text-xl text-gray-700">
            BOOK ONLINE
          </h1>
          <h2 className="md:text-3xl text-2xl my-4  font-[SourGummy]">
            Relieve Pain, Restore Movement, Revive
            Your Life
          </h2>
          <span className="font-semibold">
            Physio Buddies
          </span>{" "}
          has helped countless individuals regain
          mobility and improve their quality of
          life through personalized physiotherapy
          treatments. Our licensed practitioners
          are available for:{" "}
          <ul className="list-disc hidden md:block px-5 py-2">
            <li>
              <span className="font-semibold">
                In-Clinic Sessions:
              </span>{" "}
              Conveniently located in your
              Locality.
            </li>
            <li>
              <span className="font-semibold">
                Home Visits:
              </span>{" "}
              We come to you for comfort and
              convenience.
            </li>
            <li>
              <span className="font-semibold">
                Virtual Appointments:
              </span>{" "}
              Ideal for remote locations or those
              who prefer private care from the
              comfort of their home.
            </li>
          </ul>
          <div className="w-full ">
            <img
              src={physio}
              alt="physio"
              className="sm:w-1/2 mx-auto w-4/5"
            />
          </div>
        </div>

        {/* Form Section */}
        <div className="w-auto md:w-1/2 px-8 py-2">
          <form className="text-gray-800 w-auto md:w-4/5">
            <h3 className="text-xl md:text-2xl text-text-primary my-8">
              Ready to book an appointment with a
              licensed physiotherapist?
            </h3>
            <p className="text-base">
              Fill out the form below, and a
              member of our team will reach out to
              you shortly.
            </p>
            <div className="flex flex-col xl-custom:flex-row xl:items-center gap-2 my-4">
              <label>Full Name</label>
              <input
                type="text"
                id="name"
                className="flex-1 border-2 border-text-primary rounded-lg px-2 py-1"
                placeholder="Your Name"
              />
              <label>Phone Number</label>
              <input
                type="telephone"
                id="name"
                className="flex-1 border-2 border-text-primary rounded-lg px-2 py-1 ml-1"
                placeholder="+91 **********"
              />
            </div>
            <div className="flex flex-col gap-4 my-4">
              <label>Email</label>
              <input
                type="email"
                id="email"
                className="border-2 border-text-primary rounded-lg px-2 py-1 w-full"
                placeholder="your@email.com"
              />
              <label>
                Please Describe your Injury or
                Concern
              </label>
              <textarea
                name="describe"
                id=""
                className="border-2 border-text-primary rounded-lg px-2 py-1"
                placeholder="Briefly describe why you need physiotherapy"
              />
            </div>
            <div className="flex justify-center my-8 p-2">
              <Button buttonText="Submit" />
            </div>
          </form>
        </div>
      </div>
    </>
  );
}
