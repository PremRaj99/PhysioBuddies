import React from "react";
import Button from "../../components/Common/Button";

export default function WhyChooseUs() {
  return (
    <div className="bg-bg-primary p-4">
      <div className="md:w-4/5 mx-auto">
        <div className="text-base md:text-2xl text-center font-bold text-text-primary my-4">
          Why Choose Us
        </div>
        <div className="grid md:text-base text-sm d-cols-1 md:grid-cols-2 gap-4 p-8 ">
          <div className="bg-bg-secondary text-text-primary p-4 rounded-lg shadow-2xl">
            <div className="text-base md:text-2xl text-center font-bold  my-3">
              Convenient Home Services
            </div>
            <p className="md:text-base text-sm">
              Experience expert physiotherapy from
              the comfort of your home with
              real-time booking and flexible
              appointment schedules.
            </p>
          </div>
          <div className="bg-bg-secondary p-4 rounded-lg shadow-2xl text-text-primary">
            <div className="text-base md:text-2xl text-center font-bold  my-3">
              Personalized Therapy Plans
            </div>
            <p className="md:text-base text-sm">
              Every recovery journey is unique,
              and so are our therapy programs,
              tailored to meet your specific
              needs.
            </p>
          </div>
          <div className="bg-bg-secondary text-text-primary p-4 rounded-lg shadow-2xl">
            <div className="text-base md:text-2xl text-center font-bold  my-3">
              Affordable and Transparent Pricing
            </div>
            <p className="md:text-base text-sm">
              High-quality physiotherapy services
              at prices that fit your budget, with
              no hidden costs.
            </p>
          </div>
          <div className="bg-bg-secondary text-text-primary p-4 rounded-lg shadow-2xl">
            <div className="text-base md:text-2xl text-center font-bold my-3">
              Expert Professionals
            </div>
            <p className="md:text-base text-sm">
              Our team comprises certified and
              experienced physiotherapists
              dedicated to delivering exceptional
              care.
            </p>
          </div>
          <div className="bg-bg-secondary text-text-primary p-4 rounded-lg shadow-2xl">
            <div className="text-base md:text-2xl text-center font-bold my-3">
              Rapid Recovery Support
            </div>
            <p className="md:text-base text-sm">
              From pain management to mobility
              restoration, our techniques ensure
              faster and effective recovery.
            </p>
          </div>
          <div className="bg-bg-secondary text-text-primary p-4 rounded-lg shadow-2xl">
            <div className="text-base md:text-2xl text-center font-bold my-3">
              Technology-Driven Care
            </div>
            <p className="md:text-base text-sm">
              We use advanced methods and tools to
              enhance your recovery and track
              progress effectively.
            </p>
          </div>
          <div className="bg-bg-secondary text-text-primary p-4 rounded-lg shadow-2xl">
            <div className="text-base md:text-2xl text-center font-bold my-3">
              Trusted by Many
            </div>
            <p className="md:text-base text-sm">
              Join our growing community of
              satisfied patients who trust
              Physiobuddies for their health and
              wellness.
            </p>
          </div>
          <div className="bg-bg-secondary text-text-primary p-4 rounded-lg shadow-2xl">
            <div className="text-base md:text-2xl text-center font-bold my-3">
              24/7 Support
            </div>
            <p className="md:text-base text-sm">
              Whether you have questions or need
              guidance, we’re just a call away.
            </p>
          </div>
        </div>

        <div className="w-60 mx-auto">
            <Button buttonText="Book an Appointment" />
        </div>
      </div>
    </div>
  );
}
