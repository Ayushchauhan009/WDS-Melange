import React from "react";
import Form from "./Form";

const Contact = ({ contactUsSectionRef }) => {
  return (
    <div ref={contactUsSectionRef} className="contactBg px-4 mb-12 pt-4">
      <Form />
    </div>
  );
};

export default Contact;
