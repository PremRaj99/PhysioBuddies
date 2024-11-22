// const brainRelatedDiseases = [
//   {
//     name: "Stroke (Cerebrovascular Accident)",
//     description: "A stroke occurs when blood supply to the brain is disrupted, causing brain cells to die.",
//     symptoms: [
//       "Paralysis",
//       "Difficulty speaking",
//       "Loss of balance",
//       "Reduced mobility"
//     ],
//     physiotherapyRole: [
//       "Improving mobility and strength",
//       "Gait training for walking",
//       "Balance and coordination exercises",
//       "Prevention of contractures and muscle atrophy"
//     ]
//   },
//   {
//     name: "Traumatic Brain Injury (TBI)",
//     description: "An injury to the brain caused by external force, leading to cognitive, physical, and emotional impairments.",
//     symptoms: [
//       "Muscle weakness",
//       "Coordination issues",
//       "Dizziness",
//       "Cognitive deficits"
//     ],
//     physiotherapyRole: [
//       "Regaining strength and motor skills",
//       "Vestibular therapy for balance and dizziness",
//       "Cognitive rehabilitation combined with physical activity"
//     ]
//   },
//   {
//     name: "Parkinson’s Disease",
//     description: "A progressive neurological disorder affecting movement due to dopamine deficiency.",
//     symptoms: [
//       "Tremors",
//       "Stiffness",
//       "Slowness of movement (bradykinesia)",
//       "Postural instability"
//     ],
//     physiotherapyRole: [
//       "Exercises to improve flexibility, strength, and balance",
//       "Gait training to improve walking and reduce freezing episodes",
//       "Breathing exercises to enhance lung function"
//     ]
//   },
//   {
//     name: "Multiple Sclerosis (MS)",
//     description: "An autoimmune disease affecting the central nervous system, causing communication issues between the brain and body.",
//     symptoms: [
//       "Fatigue",
//       "Muscle weakness",
//       "Spasticity",
//       "Coordination problems"
//     ],
//     physiotherapyRole: [
//       "Strengthening exercises for weak muscles",
//       "Stretching to reduce spasticity",
//       "Functional training for daily activities"
//     ]
//   },
//   {
//     name: "Cerebral Palsy",
//     description: "A group of disorders affecting movement and posture due to abnormal brain development or damage.",
//     symptoms: [
//       "Poor coordination",
//       "Muscle spasticity",
//       "Weakness in one or more limbs",
//       "Balance difficulties"
//     ],
//     physiotherapyRole: [
//       "Improving posture and alignment",
//       "Stretching and strengthening exercises",
//       "Enhancing motor skills",
//       "Support for daily activities"
//     ]
//   }
// ];

// document
//   .querySelectorAll("input")
//   .forEach((radio) => {
//     radio.addEventListener("change", function () {
//       const elementToRemove =
//           document.querySelector(".toBeHidden");
//         elementToRemove.classList.add("hidden");

//         const elementToAdd =
//           document.querySelector(
//             ".toShowContent"
//           );
          
//       elementToAdd.classList.remove('hidden')

//       if (this.checked) {
//         console.log(`Selected option: ${this.value}`);
//         bodyPartSelected(this.value);
//         const selected = document.getElementById(
//           "selectedOption"
//         );       
//       }
//     });
//   });
// export default bodyPartSelected;
