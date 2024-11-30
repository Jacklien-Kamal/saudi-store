import React, { useState } from "react";

const FormPage = () => {
  const [formData, setFormData] = useState({});

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({ ...formData, [name]: value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log(formData);
    alert("Form Submitted!");
  };

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-4">Customer Information</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="text"
          name="name"
          placeholder="Full Name"
          onChange={handleChange}
          className="p-2 border w-full rounded"
        />
        <input
          type="email"
          name="email"
          placeholder="Email"
          onChange={handleChange}
          className="p-2 border w-full rounded"
        />
        <textarea
          name="message"
          placeholder="Your Message"
          onChange={handleChange}
          className="p-2 border w-full rounded"
        ></textarea>
        <button className="px-4 py-2 bg-blue-500 text-white rounded">
          Submit
        </button>
      </form>
    </div>
  );
};

export default FormPage;
