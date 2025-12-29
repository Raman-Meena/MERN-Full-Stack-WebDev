import React from "react";
import { useState } from "react";

const Contact = () => {
  const [contactData, setContactData] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  const [isLoading, setIsLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setContactData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClear = () => {
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {
      const response = await fetch(
        "https://official-joke-api.appspot.com/jokes/random"
      );
      console.log(contactData);
      
    } catch (error) {
      console.log(error.meesage);
    } finally {
      setIsLoading(false);
    }

    handleClear();
  };

  return (
    <>
      <div className="text-center">
        <h1>Contact Us</h1>
        <div className="container mt-5">
          <form onReset={handleClear} onSubmit={handleSubmit}>
            <div>
              <label htmlFor="fullName">FullName</label>
              <input
                type="text"
                name="fullName"
                value={contactData.fullName}
                onChange={handleChange}
                placeholder="Enter Your Full Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={contactData.email}
                onChange={handleChange}
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={contactData.message}
                onChange={handleChange}
                placeholder="Message"
                required
              ></textarea>
            </div>
            <div>
              <button type="reset" className="btn btn-danger m-2">
                Clear
              </button>
              <button type="submit" className="btn btn-primary">
                {isLoading ? "Loading" : "Submit"}
              </button>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default Contact;
