import React, { useState } from "react";
import { db } from "../../Firebase/firebase.js"; 
import { collection, addDoc  } from "firebase/firestore"; 


const ContactUsForm = () => {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    service: "",
    message: "",
  });

  const [errors, setErrors] = useState({});

  const validate = () => {
    const errs = {};

    // Name: more than 3 chars, not a number, only letters and spaces
    if (!form.name || form.name.trim().length <= 3 || /\d/.test(form.name)) {
      errs.name = "Name must be at least 3 letters and not contain numbers.";
    }

    // Email: must include @ and basic pattern
    if (
      !form.email ||
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)
    ) {
      errs.email = "Enter a valid email address.";
    }

    // Phone: must be exactly 11 digits, numbers only
    if (!/^\d{11}$/.test(form.phone)) {
      errs.phone = "Phone number must be exactly 11 digits.";
    }

    return errs;
  };

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
    setErrors({ ...errors, [e.target.name]: undefined });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const validationErrors = validate();
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length === 0) {
      try {
        // Add the form data to the Firestore collection
        await addDoc(collection(db, "Contact-Us-Form"), form);
        alert("Message has been sent!");
        setForm({
          name: "",
          email: "",
          phone: "",
          service: "",
          message: "",
        });
      } catch (error) {
        console.error("Error adding document: ", error); // Log the error
        alert("An error occurred while sending your message. Please try again.");
      }
    }
  };



  return (
    <section className="w-full bg-white py-12 px-2">
      <div className="max-w-3xl mx-auto">
        <div className="text-center mb-8">
          <h2 className="text-3xl md:text-5xl font-bold mb-2 text-[#0a2540]">
            Get in touch with us.
          </h2>
          <p className="text-gray-600">
            Fill up the form and our team will get back to you within 24 hours
          </p>
        </div>
        <form
          onSubmit={handleSubmit}
          className="bg-white rounded-2xl shadow-xl p-6 md:p-10 flex flex-col gap-6"
        >
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div>
              <label className="block font-semibold mb-1" htmlFor="name">
                Name
              </label>
              <input
                className={`w-full bg-[#f4faff] border ${
                  errors.name ? "border-red-400" : "border-blue-100"
                } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.name ? "focus:ring-red-200" : "focus:ring-blue-200"
                }`}
                type="text"
                id="name"
                name="name"
                placeholder="What’s your name?"
                value={form.name}
                onChange={handleChange}
                required
              />
              {errors.name && (
                <span className="text-red-500 text-sm">{errors.name}</span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="email">
                Email
              </label>
              <input
                className={`w-full bg-[#f4faff] border ${
                  errors.email ? "border-red-400" : "border-blue-100"
                } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.email ? "focus:ring-red-200" : "focus:ring-blue-200"
                }`}
                type="email"
                id="email"
                name="email"
                placeholder="What’s your email?"
                value={form.email}
                onChange={handleChange}
                required
              />
              {errors.email && (
                <span className="text-red-500 text-sm">{errors.email}</span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="phone">
                Phone
              </label>
              <input
                className={`w-full bg-[#f4faff] border ${
                  errors.phone ? "border-red-400" : "border-blue-100"
                } rounded-lg px-4 py-3 focus:outline-none focus:ring-2 ${
                  errors.phone ? "focus:ring-red-200" : "focus:ring-blue-200"
                }`}
                type="tel"
                id="phone"
                name="phone"
                placeholder="e.g. 03001234567"
                value={form.phone}
                onChange={handleChange}
                required
                maxLength={11}
              />
              {errors.phone && (
                <span className="text-red-500 text-sm">{errors.phone}</span>
              )}
            </div>
            <div>
              <label className="block font-semibold mb-1" htmlFor="service">
                Service interested in
              </label>
              <input
                className="w-full bg-[#f4faff] border border-blue-100 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-200"
                type="text"
                id="service"
                name="service"
                placeholder="Ex. Auto Loan, Home Loan"
                value={form.service}
                onChange={handleChange}
              />
            </div>
          </div>
          <div>
            <label className="block font-semibold mb-1" htmlFor="message">
              Message
            </label>
            <textarea
              className="w-full bg-[#f4faff] border border-blue-100 rounded-lg px-4 py-3 min-h-[100px] focus:outline-none focus:ring-2 focus:ring-blue-200"
              id="message"
              name="message"
              placeholder="I would like to get in touch with you..."
              value={form.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="flex justify-center">
            <button
              type="submit"
              className="bg-[#1753c6] hover:bg-[#0a3bb8] text-white font-semibold px-10 py-3 rounded-full text-lg transition"
            >
              Send Message
            </button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactUsForm;