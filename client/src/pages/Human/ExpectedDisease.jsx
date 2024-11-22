import React, { useState } from "react";

const ExpectedDisease = (disease) => {
  const brainRelatedDiseases = [
    {
      name: "Stroke (Cerebrovascular Accident)",
      description: "A stroke occurs when blood supply to the brain is disrupted, causing brain cells to die."
    },
    {
      name: "Traumatic Brain Injury (TBI)",
      description: "An injury to the brain caused by external force, leading to cognitive, physical, and emotional impairments."
    },
    {
      name: "Parkinson’s Disease",
      description: "A progressive neurological disorder affecting movement due to dopamine deficiency."
    },
    {
      name: "Multiple Sclerosis (MS)",
      description: "An autoimmune disease affecting the central nervous system, causing communication issues between the brain and body."
    },
    {
      name: "Cerebral Palsy",
      description: "A group of disorders affecting movement and posture due to abnormal brain development or damage."
    }
  ];

  const [selectedDescription, setSelectedDescription] = useState("");

  const handleSelectChange = (event) => {
    const selectedDisease = brainRelatedDiseases.find(
      (disease) => disease.name === event.target.value
    );
    setSelectedDescription(selectedDisease?.description || "");
  };

  return (
    <div>
      <label htmlFor="Disease">Expected Problem</label>
      <select name="Disease" id="Disease" onChange={handleSelectChange}>
        <option value="" disabled selected>
          Select a disease
        </option>
        {brainRelatedDiseases.map((disease, index) => (
          <option key={index} value={disease.name}>
            {disease.name}
          </option>
        ))}
      </select>
      {selectedDescription && (
        <div>
          <h2>Description</h2>
          <p>{selectedDescription}</p>
        </div>
      )}
    </div>
  );
};

export default ExpectedDisease;
