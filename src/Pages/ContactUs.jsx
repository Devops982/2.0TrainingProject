import React, { useState } from "react";
import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [inputValue, setinputValue] = useState("");
  const handleChange = (e) => {
    setinputValue(e.target.value);
  };
  const [state, handleSubmit] = useForm("mwkdbwow");
  if (state.succeeded) {
    return <p>Thanks for joining!</p>;
  }

  return (
    <div className="m-6">
      <form onSubmit={handleSubmit} className="p-6 rounded-lg shadow-md">
        <div className="mb-4">
          <label
            htmlFor="email"
            className="block text-lg font-semibold text-red-800"
          >
            Email Address
          </label>
          <input
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:border-blue-300 focus:outline-none focus:ring"
            id="email"
            type="email"
            name="email"
          />
          <ValidationError prefix="Email" field="email" errors={state.errors} />
        </div>

        <div className="mb-4">
          <label
            htmlFor="message"
            className="block text-lg font-semibold text-red-800"
          >
            Message
          </label>
          <textarea
            onChange={handleChange}
            className="w-full py-2 px-3 border border-gray-300 rounded-md focus:border-blue-300 focus:outline-none focus:ring"
            id="message"
            name="message"
          />
          <ValidationError
            prefix="Message"
            field="message"
            errors={state.errors}
          />
        </div>

        <div className="text-center">
          <button
            type="submit"
            disabled={state.submitting}
            className="bg-green-500 text-white py-2 px-4 rounded-md hover:bg-green-600 focus:outline-none focus:ring"
          >
            Submit
          </button>
        </div>
      </form>

      <h1 className="font-sans font-extrabold text-2xl text-red-800 mt-6">
        {inputValue}
      </h1>
    </div>
  );
}

const ContactUs = () => {
  return (
    <>
      <ContactForm />
    </>
  );
};
export default ContactUs;
