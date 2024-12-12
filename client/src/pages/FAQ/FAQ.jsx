import React from "react";
import Accordion from "./Accordion";

const FAQ = () => {
  return (
    <div className="py-16 gap-3 bg-bg-primary rounded-lg flex flex-col  items-center">
      
      <h2 className="text-center text-2xl text-text-primary font-bold">Frequently Asked Question </h2>
      <Accordion
        title={"What is the cost of therapy?"}
        answer={
          "The cost of therapy varies depending on the therapist. It can range from $50 to $200 per session."
        }
      />
      <Accordion
        title={"How long does therapy last?"}
        answer={
          "Therapy can last anywhere from a few weeks to several years."
        }
      />
      <Accordion
        title={
          "What is the difference between a psychiatrist and a psychologist?"
        }
        answer={
          "A psychiatrist is a medical doctor who can prescribe medication, while a psychologist cannot."
        }
      />
      <Accordion
        title={
          "What is the difference between a therapist and a counselor?"
        }
        answer={
          "A therapist is a licensed professional who can diagnose and treat mental health conditions, while a counselor is not."
        }
      />
      <Accordion
        title={
          "What is the difference between therapy and counseling?"
        }
        answer={
          "Therapy is more long-term and focuses on gaining insight into emotional problems, while counseling is more short-term and focuses on problem-solving."
        }
      />
    </div>
  );
};

export default FAQ;
