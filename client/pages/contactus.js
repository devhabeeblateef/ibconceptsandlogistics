import React, { useState, useRef } from "react";
import Nav from "./UI/Nav";
import Footer from "./UI/Footer";

function Contactus() {
  const form = useRef();
  const [loading, setLoading] = useState(false)
  const [successMessage, setSuccessMessage] = useState("")

  // Form States
  const [fullname, setFullName] = useState();
  const [email, setEmail] = useState("");
  const [currentfield, setCurrentField] = useState("")
  const [occupation, setOccupation] = useState("")
  const [agerange, setAgeRange] = useState("")
  const [about, setAbout] = useState("")

  

  const resetForm = () => {
    setFullName("")
    setEmail("")
    setCurrentField("")
    setOccupation("")
    setAgeRange("")
    setAbout("")
  }

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    
    try{
    setLoading(false);
    resetForm();
    setSuccessMessage("Received!");
    setTimeout(() => {
      setSuccessMessage("");
    }, 2000)
  }catch(error){
    setLoading("false")
    setSuccessMessage("An Error occured")
    console.log(error.message)
  }
  };

  return (
    <div className="font-poopins  text-black">
    <div className="p-8">  
    <Nav/>
    </div>
      <div className="bg-[#f2f2f4] font-poppins py-10 px-6 md:px-16 lg:px-32">
        <h2 className="text-4xl md:text-6xl text-center font-semibold mb-6 text-[#0D0D0D]">
          Contact Us
        </h2>
        <p className="text-gray-600 text-center mb-8">
          Please fill the form below to get a quote.
        </p>
        <form ref={form} onSubmit={handleSubmit} className="max-w-md mx-auto">
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800">
              Full Name
            </label>
            <input
              type="text"
              value={fullname}
              onChange={(e) => setFullName(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="John Doe"
            />
          </div>
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800">
              Email
            </label>
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="johndoe@example.com"
            />
          </div>

          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800">
              Occupation
            </label>
            <input
              type="text"
              value={occupation}
              onChange={(e) => setOccupation(e.target.value)}
              className="mt-1 p-3 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder="Student, Electrician, etc."
            />
          </div>

          
          <div className="mb-6">
            <label className="block text-sm font-medium text-gray-800">
              Tell us about yourself
            </label>
            <input
              type="text"
              value={about}
              onChange={(e) => setAbout(e.target.value)}
              className="mt-1 p-3 h-64 w-full border border-gray-300 rounded-md focus:outline-none focus:ring focus:border-blue-500"
              placeholder=""
            />
          </div>

          <button
    type="submit"
    className={successMessage ? "w-full py-3 bg-green-800 text-white rounded-md hover:bg-gray-800" : 
    "w-full py-3 bg-black text-white rounded-md hover:bg-gray-800" }
  >
    {loading ? "Please wait..." :  successMessage ? successMessage : "Submit"}
  </button>
        </form>
      </div>
      <Footer/>
    </div>
  );
}

export default Contactus;
