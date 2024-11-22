import React from "react";

const DropdownMenu = () => {
  const diseases = [
    { name: "Stroke" },
    { name: "Traumatic Brain Injury (TBI)" },
    { name: "Parkinson's Disease" },
    { name: "Multiple Sclerosis (MS)" },
    { name: "Cerebral Palsy" },
    { name: "Alzheimer's Disease" },
    { name: "Epilepsy" },
    { name: "Brain Tumor" },
    { name: "Migraine" },
    { name: "Huntington's Disease" },
  ];
  return (
    <div>
      <label htmlFor="Disease">Select a Disease</label>
      <select name="Disease" id="Disease">
        <option value="--select-a-disease--" disabled selected>
          Select a disease
        </option>
        {diseases.map((disease, index) => (
          <option key={index} value={disease.name}>
            {disease.name}
          </option>
        ))}
      </select>
    </div>
  );
};

export default DropdownMenu;
