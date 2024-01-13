import React, { useState } from "react";

const ContactUs = () => {
  const [name, setName] = useState("");
  const [contactNumber, setContactNumber] = useState("");
  const [email, setEmail] = useState("");
  const [address, setAddress] = useState("");
  const [query, setQuery] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission logic here
  };

  return (
    <div className="">
      <h1 className="text-blue-500 text-center ">Contact Us</h1>
      <form onSubmit={handleSubmit} className="">
        <div className="flex justify-center m-2">
          <input
            className="mr-2 border-2 border-blue-500"
            placeholder="Name"
            type="text"
            id="name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
        </div>
        <div className="flex justify-center m-2">
          <input
            className="mr-2 border-2 border-blue-500"
            placeholder="Contact Number"
            type="text"
            id="contactNumber"
            value={contactNumber}
            onChange={(e) => setContactNumber(e.target.value)}
          />
        </div>
        <div className="flex justify-center m-2">
          <input
            className="mr-2 border-2 border-blue-500"
            placeholder="Email ID"
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>

        <div className="flex justify-center m-2">
          <input
            className="mr-2 border-2 border-blue-500"
            placeholder="Address"
            type="text"
            id="address"
            value={address}
            onChange={(e) => setAddress(e.target.value)}
          />
        </div>

        <div className="flex justify-center m-2" >
          <textarea
            className="border-2 border-blue-500 "
            placeholder="Query"
            id="query"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          ></textarea>
        </div>

        <div className="flex justify-center " >
        <button
          className="m-2 text-yellow-100 hover:text-yellow-500 border-2 border-yellow-500 bg-yellow-500 hover:bg-yellow-100"
          type="submit"
        >
          Submit
        </button>
        </div>
      </form>
    </div>
  );
};

export default ContactUs;
