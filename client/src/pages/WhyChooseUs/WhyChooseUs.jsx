import care from "../../assets/images/offer_section_icons/care.png";
import encryption from "../../assets/images/offer_section_icons/encryption.png";
import expert from "../../assets/images/offer_section_icons/expert.png";
import home from "../../assets/images/offer_section_icons/Home.png";
import plan from "../../assets/images/offer_section_icons/plans.png";
import pricing from "../../assets/images/offer_section_icons/pricing.png";
import recovery from "../../assets/images/offer_section_icons/recovery.png";
import support from "../../assets/images/offer_section_icons/support.png";
import trust from "../../assets/images/offer_section_icons/trust.png";
import WhyChooseUsCard from "./WhyChooseUsCard";

export default function WhyChooseUs() {
  const data = [
    {
      icon: home,
      title: "Convenient Home Services",
      desc: "Experience expert physiotherapy from the comfort of your home with real-time booking and flexible appointment schedules.",
    },
    {
      icon: plan,
      title: "Personalized Therapy Plans",
      desc: "Every recovery journey is unique, and so are our therapy programs, tailored to meet your specific needs.",
    },
    {
      icon: pricing,
      title: "Affordable and Transparent Pricing",
      desc: "High-quality physiotherapy services at prices that fit your budget, with no hidden costs.",
    },
    {
      icon: expert,
      title: "Expert Professionals",
      desc: "Our team comprises certified and experienced physiotherapists dedicated to delivering exceptional care.",
    },
    {
      icon: recovery,
      title: "Rapid Recovery Support",
      desc: "From pain management to mobility restoration, our techniques ensure faster and effective recovery.",
    },
    {
      icon: care,
      title: "Technology-Driven Care",
      desc: "We use advanced methods and tools to enhance your recovery and track progress effectively.",
    },
    {
      icon: trust,
      title: "Trusted by Many",
      desc: "Join our growing community of satisfied patients who trust Physiobuddies for their health and wellness.",
    },
    {
      icon: support,
      title: "24/7 Support",
      desc: "Whether you have questions or need guidance, we’re just a call away.",
    },
    {
      icon: encryption,
      title: "256-bit SSL Encryption",
      desc: "Your data is safe with us. We use the latest encryption technology to protect your personal information.",
    },
  ];
  return (
    <div className="bg-bg-primary">
      <h2 className="font-bold md:text-2xl text-xl text-center pt-8">
        What we offer
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-8 md:px-40 px-8 py-8">
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
