import React from "react";
import Form from "./Form";

const Contact = ({ contactUsSectionRef }) => {
  return (
    <div
      ref={contactUsSectionRef}
      className="contactBg bg-[#f8f8f8] px-4 pb-12 pt-4"
    >
      <Form />
    </div>
  );
};

export default Contact;
