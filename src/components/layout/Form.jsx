import React, { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import Select from "react-select";
import axios from "axios";
const options = [
  { value: "Category 1", label: "Business Website" },
  { value: "Category 2", label: "E-Commerce Website" },
  { value: "Category 3", label: "Customised Website" },
  { value: "Category 4", label: "Others" },
];
const options2 = [
  { value: "Budget 1", label: "Rs. 50K - Rs. 1 Lac" },
  { value: "Budget 2", label: "Rs. 1 Lac - 2 Lac" },
  { value: "Budget 3", label: "More than 2 Lacs" },
];

const Form = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [selectedCategories, setSelectedCategories] = useState([]);
  const [budget, setBudget] = useState("");

  const handleNameChange = (e) => {
    setName(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePhoneChange = (e) => {
    setPhone(e.target.value);
  };

  const handleCategoryChange = (selectedValues) => {
    setSelectedCategories(selectedValues);
  };

  const handleBudgetChange = (selectedValues) => {
    setBudget(selectedValues);
  };

  const formField = useRef();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const formData = {
        name,
        email,
        phone,
        categories: selectedCategories.map((category) => category.label),
        budget,
      };

      const { data } = await axios.post(
        "https://brave-bear-tights.cyclic.cloud/api/image-url",

        {
          name: formData.name,
          phone: formData.phone,
          categories: formData.categories,
        }
      );

      emailjs
        .send(
          "service_melangedigital",
          "template_d80pgaj",
          {
            from_name: formData.name,
            to_name: "Sanket Bolinjkar",
            from_email: formData.email,
            from_phone: formData.phone,
            from_company: formData.company,
            from_categories: formData.categories,
            to_email: "hello@melangedigital.in",
            from_budget: formData.budget,
          },
          "11W3shu7B6S46t7"
          // "11W3shu7B6S46t437"
        )
        .then(
          () => {
            alert(
              "Thank you for showing interest in our services. Our team will reach out to you shortly."
            );
          },
          (error) => {
            console.log(error);
            alert("Something went wrong!");
          }
        );
      setName("");
      setEmail("");
      setPhone("");

      setSelectedCategories([]);
      setBudget("");
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <div className="pl-2 pr-2  w-[100%] font-nunito lg:py-20 xxl:py-28 2xl:py-36 ">
      <div className="lg:w-[58%] lg:ml-auto">
        <h2 className="font-semibold text-[24px] lg:text-[32px] lg:ml-48">
          Are you ready?
        </h2>
        <p className="text-[16px] whitespace-nowrap lg:text-[20px] lg:ml-48">
          Let's create the future of your business together.
        </p>
        <form
          ref={formField}
          className="lg:my-6  lg:px-48"
          onSubmit={handleSubmit}
        >
          <input
            type="text"
            required
            name="full_name"
            value={name}
            onChange={handleNameChange}
            placeholder="Name*"
            className="bg-[#fff] my-2 p-2 w-full placeholder-black outline-none"
          />
          <input
            type="tel"
            name="phone"
            value={phone}
            onChange={handlePhoneChange}
            required
            placeholder="Mobile no*"
            className="bg-[#fff] my-2 p-2 w-full placeholder-black outline-none"
          />
          <input
            type="email"
            name="email"
            required
            value={email}
            onChange={handleEmailChange}
            placeholder="Company email id*"
            className="bg-[#fff] my-2 p-2 w-full placeholder-black outline-none"
          />
          <Select
            options={options}
            isMulti
            value={selectedCategories}
            onChange={handleCategoryChange}
            placeholder="Type of website*"
            className="mt-2 mb-4 placeholder-black"
          />
          <Select
            options={options2}
            value={budget}
            onChange={handleBudgetChange}
            placeholder="Budget*"
            className="mb-1 placeholder-black"
          />
          <button
            className="submitBtn text-white w-full py-2 font-bold mt-3 rounded-full mb-6"
            type="submit"
          >
            Submit
          </button>
        </form>
      </div>
    </div>
  );
};

export default Form;
