import React from "react";
import ServicesCard from "./ServicesCard";
import orthopaedic from "../../assets/images/conditionsIcon/ortho_icon.png";
import neuro from "../../assets/images/conditionsIcon/neuro_icon.png";
import geriatrics from "../../assets/images/conditionsIcon/geriatrics_icon.png";
import sports from "../../assets/images/conditionsIcon/sports_icon.png";
import paedatrics from "../../assets/images/conditionsIcon/paedatrics_icon.png";

export default function ConditionsWeTreat() {
  const condtions = [
    {
      icons: orthopaedic,
      name: "Orthopaedic",
      desc: [
        "Orthopaedics treats bone and joint issues",
        "It deals with fractures and arthritis",
        "Surgeons restore mobility and reduce pai",
        "Advanced techniques improve patient outcomes",
      ],
    },
    {
      icons: neuro,
      name: "Neurological",
      desc: [
        "Neurology focuses on brain and nerve disorders.",
        "It treats conditions like epilepsy and stroke",
        "Neurologists diagnose and manage complex diseases",
        "Advanced care improves patient neurological health",
      ],
    },
    {
      icons: paedatrics,
      name: "Paedatrics",
      desc: [
        "Geriatrics focuses on elderly healthcare",
        "It addresses age-related diseases and conditions",
        "Specialists manage chronic illnesses and frailty",
        "Improved care enhances seniors' quality of life",
      ],
    },
    { icons: sports, name: "Sports", desc: [
      "Sports medicine treats sports-related injuries",
      "It focuses on prevention and rehabilitation",
      "Specialists help athletes recover and perform better",
      "Advanced care improves sports performance and health",
    ] },
    {
      icons: geriatrics,
      name: "Geriatrics",
      desc: [
        "Paediatrics focuses on child healthcare",
        "It treats childhood diseases and conditions",
        "Specialists manage growth and development issues",
        "Advanced care improves children's health outcomes",
      ],
    },
    { icons: neuro, name: "name", desc: "" },
  ];
  
  return (
    <div className="p-4 bg-bg-primary">
      <div className="text-center font-bold text-2xl">
        Conditions We Treat
      </div>

      <div className="mt-5 grid grid-cols-2 md:grid-cols-3 md:gap-8 gap-1 w-auto md:w-4/5 mx-auto">
        {condtions.map((condition) => (
          <ServicesCard
            icon={condition.icons}
            name={condition.name}
            desc={condition.desc}
          />
        ))}
      </div>
    </div>
  );
}
