import React from "react";
import { useState } from "react";

const Contact = () => {
  const [fullName, setFullName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const handleClear = () => {
    setFullName("");
    setEmail("");
    setMessage("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    try {

      const response = await fetch("https://official-joke-api.appspot.com/jokes/random");
      setTimeout(() => {
        const data = {
          fullName,
          email,
          message,
        };
        console.log(data);
      }, 5000);
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
                value={fullName}
                onChange={(e) => setFullName(e.target.value)}
                placeholder="Enter Your Full Name"
                required
              />
            </div>
            <div>
              <label htmlFor="email">Email</label>
              <input
                type="text"
                name="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="Enter Your Email"
                required
              />
            </div>
            <div>
              <label htmlFor="message">Message</label>
              <textarea
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
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
