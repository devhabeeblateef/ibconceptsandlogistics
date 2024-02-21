import React from "react";
import Link from "next/link";
import Nav from "./UI/Nav";

function Contactus() {
 
  return (
    <div>
    <div className="bg-gray-300 p-6 w-screen">  
    <Nav />
    </div>
    <div className="p-8">
    
      <div className="">
        <div className="flex justify-center items-center ">
          <form className="w-full max-w-mdrounded ">
            <h2 className="text-4xl font-semibold">Contact Us</h2>
            <p className="mb-4 text-gray-500 text-sm">Please fill the form below to get a quote</p>
            <div className="mb-4">
              <label htmlFor="fullName" className="block font-medium mb-1">
                Full Name
              </label>
              <input
                type="text"
                id="fullName"
                name="fullName"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="email" className="block font-medium mb-1">
                Email Address
              </label>
              <input
                type="email"
                id="email"
                name="email"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="occupation" className="block font-medium mb-1">
                What do you do?
              </label>
              <input
                type="text"
                id="occupation"
                name="occupation"
                className="w-full border rounded px-3 py-2"
                required
              />
            </div>
            <div className="mb-4">
              <label htmlFor="interest" className="block font-medium mb-1">
                What do you want?
              </label>
              <select
                id="interest"
                name="interest"
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="">Select an option</option>
                <option value="Scrum">Option A</option>
                <option value="Web Development">Option B</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="commitment" className="block font-medium mb-1">
                How much time will you be willing to commit?
              </label>
              <select
                id="commitment"
                name="commitment"
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="">Select an option</option>
                <option value="1month">1 month</option>
                <option value="3months">3 months</option>
                <option value="6months">6 months</option>
              </select>
            </div>
            <div className="mb-4">
              <label htmlFor="ageRange" className="block font-medium mb-1">
                Age Range
              </label>
              <select
                id="ageRange"
                name="ageRange"
                className="w-full border rounded px-3 py-2"
                required
              >
                <option value="">Select an option</option>
                <option value="18-25">18-25</option>
                <option value="26-35">26-35</option>
                <option value="36-45">36-45</option>
                <option value="46+">46+</option>
              </select>
            </div>
            <div className="mb-4">
              <button
                type="submit"
                className="w-full bg-blue-500 text-white rounded px-4 py-2 font-medium"
              >
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
    </div>
  );
}

export default Contactus;
