import React from "react";
import Button from "../../components/Common/Button";
import appointmentLogo from "../../assets/images/appointmentLogos.svg";
import WhyChooseUsCard from "./WhyChooseUsCard";
export default function WhyChooseUs() {
  const data = [
    {
      icon: "",
      title: "Convenient Home Services",
      desc: "Experience expert physiotherapy from the comfort of your home with real-time booking and flexible appointment schedules.",
    },
    {
      icon: "",
      title: "Personalized Therapy Plans",
      desc: "Every recovery journey is unique, and so are our therapy programs, tailored to meet your specific needs.",
    },
    {
      icon: "",
      title: "Affordable and Transparent Pricing",
      desc: "High-quality physiotherapy services at prices that fit your budget, with no hidden costs.",
    },
    {
      icon: "",
      title: "Expert Professionals",
      desc: "Our team comprises certified and experienced physiotherapists dedicated to delivering exceptional care.",
    },
    {
      icon: "",
      title: "Rapid Recovery Support",
      desc: "From pain management to mobility restoration, our techniques ensure faster and effective recovery.",
    },
    {
      icon: "",
      title: "Technology-Driven Care",
      desc: "We use advanced methods and tools to enhance your recovery and track progress effectively.",
    },
    {
      icon: "",
      title: "Trusted by Many",
      desc: "Join our growing community of satisfied patients who trust Physiobuddies for their health and wellness.",
    },
    {
      icon: "",
      title: "24/7 Support",
      desc: "Whether you have questions or need guidance, we’re just a call away.",
    }
  ];
  return (
    <div className="bg-bg-primary">
        <h2 className="font-bold md:text-2xl text-xl text-center pt-8">What we offer</h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-8 md:px-40 px-8 py-8">
        {data.map((item, index) => (
            <WhyChooseUsCard
                key={index}
                icon={item.icon}
                title={item.title}
                desc={item.desc}
            />
        ))}
      </div>
    </div>
  );
}
