import React, { useState } from "react";
import toast from "react-hot-toast";
import { Toaster } from "react-hot-toast";

const App = () => {
  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    dob: "",
    qualification: "",
    grade: "",
    availableCourse: "",
    preferredBatch: [],
    preferredTiming: "",
    address: "",
    city: "",
    pinCode: "",
  });

  const [validationError, setValidationError] = useState({});

  const handleRegister = (e) => {
    const { name, value } = e.target;
    setUserData((prev) => ({ ...prev, [name]: value }));
  };

  const handleBatchChange = (e) => {
    const { value, checked } = e.target;
    setUserData((prev) => ({
      ...prev,
      preferredBatch: checked
        ? [...prev.preferredBatch, value]
        : prev.preferredBatch.filter((b) => b !== value),
    }));
  };

  const validate = () => {
    let Error = {};

    if (userData.fullName.length < 3)
      Error.fullName = "Name must be at least 3 characters";
    else if (!/^[A-Za-z ]+$/.test(userData.fullName))
      Error.fullName = "Only alphabets allowed";

    if (
      !/^[\w.]+@(gmail|outlook|ricr|yahoo)\.(com|in|co\.in)$/.test(
        userData.email
      )
    )
      Error.email = "Invalid email";

    if (!/^[6-9]\d{9}$/.test(userData.phone))
      Error.phone = "Invalid Indian mobile number";

    if (!userData.dob) Error.dob = "DOB required";
    if (!userData.qualification) Error.qualification = "Qualification required";
    if (!userData.grade) Error.grade = "Grade required";
    if (!userData.availableCourse) Error.availableCourse = "Course required";
    if (userData.preferredBatch.length === 0)
      Error.preferredBatch = "Select at least one batch";
    if (!userData.preferredTiming) Error.preferredTiming = "Select timing";
    if (!userData.address) Error.address = "Address required";
    if (!userData.city) Error.city = "City required";
    if (!/^\d{6}$/.test(userData.pinCode)) Error.pinCode = "Invalid PIN code";

    setValidationError(Error);
    return Object.keys(Error).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!validate()) {
      toast.error("Fill the form correctly");
      return;
    }

    console.log(userData);
    toast.success("Registration Successful");
    handleClear();
  };

  const handleClear = () => {
    setUserData({
      fullName: "",
      email: "",
      phone: "",
      dob: "",
      qualification: "",
      grade: "",
      availableCourse: "",
      preferredBatch: [],
      preferredTiming: "",
      address: "",
      city: "",
      pinCode: "",
    });
    setValidationError({});
  };

  return (
    <>
      <Toaster />
      <div className="bg-gray-100 min-h-screen">
        <header>
          <div className="w-full bg-cyan-700 px-3 py-1 flex justify-between items-center">
            <div className="flex gap-3 items-center">
              <img
                src="https://img.freepik.com/premium-vector/campus-collage-university-education-logo-design-template_7492-59.jpg?w=2000"
                alt=""
                className="w-12.5 h-12.5 rounded-full"
              />
              <h1 className="text-white text-2xl font-semibold">
                Registration Page
              </h1>
            </div>
            <button className="bg-black text-white font-bold px-4 py-1 rounded hover:bg-amber-400">
              Student Login
            </button>
          </div>
        </header>

        <main>
          <form onSubmit={handleSubmit} onReset={handleClear}>
            <div className="max-w-6xl mx-auto bg-white border rounded shadow p-3 mt-3">
              <div className="border border-black rounded p-3 pt-4 my-5 relative">
                <span className="absolute -top-4 bg-white px-2 text-lg text-cyan-800">
                  Personal Information
                </span>

                <div className="grid gap-3">
                  <div className="flex items-center">
                    <label className="w-1/4 font-medium">Full Name *</label>
                    <input
                      name="fullName"
                      value={userData.fullName}
                      onChange={handleRegister}
                      className="w-3/4 border rounded px-3 py-1"
                    />
                  </div>
                  {validationError.fullName && (
                    <p className="text-red-500 text-sm text-end">
                      {validationError.fullName}
                    </p>
                  )}

                  <div className="flex items-center">
                    <label className="w-1/4 font-medium">Email *</label>
                    <input
                      name="email"
                      value={userData.email}
                      onChange={handleRegister}
                      className="w-3/4 border rounded px-3 py-1"
                    />
                  </div>
                  {validationError.email && (
                    <p className="text-red-500 text-sm text-end">
                      {validationError.email}
                    </p>
                  )}

                  <div className="flex items-center">
                    <label className="w-1/4 font-medium">Mobile *</label>
                    <input
                      type="text"
                      maxLength={10}
                      name="phone"
                      value={userData.phone}
                      onChange={handleRegister}
                      className="w-3/4 border rounded px-3 py-1"
                    />
                  </div>
                  {validationError.phone && (
                    <p className="text-red-500 text-sm text-end">
                      {validationError.phone}
                    </p>
                  )}

                  <div className="flex items-center">
                    <label className="w-1/4 font-medium">DOB *</label>
                    <input
                      type="date"
                      name="dob"
                      value={userData.dob}
                      onChange={handleRegister}
                      className="w-3/4 border rounded px-3 py-1"
                    />
                  </div>
                  {validationError.dob && (
                    <p className="text-red-500 text-sm text-end">
                      {validationError.dob}
                    </p>
                  )}
                </div>
              </div>

              <div className="border border-black rounded p-3 pt-4 my-5 relative">
                <span className="absolute -top-4 bg-white px-2 text-lg text-cyan-800">
                  Academic Details
                </span>

                <div className="grid gap-3">
                  <div className="flex items-center">
                    <label className="w-1/4 font-medium">Qualification *</label>
                    <select
                      name="qualification"
                      value={userData.qualification}
                      onChange={handleRegister}
                      className="w-3/4 border rounded px-3 py-1"
                    >
                      <option value="">Select</option>
                      <option>Secondary Schooling</option>
                      <option>Senior Secondary Schooling</option>
                      <option>Graduation</option>
                      <option>Post Graduation</option>
                      <option>PhD</option>
                    </select>
                  </div>
                  {validationError.qualification && (
                    <p className="text-red-500 text-sm text-end">
                      {validationError.qualification}
                    </p>
                  )}

                  <div className="flex items-center">
                    <label className="w-1/4 font-medium">Grade *</label>
                    <input
                      name="grade"
                      value={userData.grade}
                      onChange={handleRegister}
                      className="w-3/4 border rounded px-3 py-1"
                    />
                  </div>
                  {validationError.grade && (
                    <p className="text-red-500 text-sm text-end">
                      {validationError.grade}
                    </p>
                  )}
                </div>
              </div>

              {/* COURSE */}
              <div className="border border-black rounded p-3 pt-4 my-5 relative">
                <span className="absolute -top-4 bg-white px-2 text-lg text-cyan-800">
                  Course Information
                </span>

                <div className="grid gap-3">
                  <div className="flex items-center">
                    <label className="w-1/4 font-medium">Course *</label>
                    <select
                      name="availableCourse"
                      value={userData.availableCourse}
                      onChange={handleRegister}
                      className="w-3/4 border rounded px-3 py-1"
                    >
                      <option value="">Select</option>
                      <option>Full Stack Development</option>
                      <option>Data Science</option>
                      <option>Data Analytics</option>
                      <option>Java DSA</option>
                      <option>Python DSA</option>
                    </select>
                  </div>
                  {validationError.availableCourse && (
                    <p className="text-red-500 text-sm text-end">
                      {validationError.availableCourse}
                    </p>
                  )}

                  <div className="flex items-center">
                    <label className="w-1/4 font-medium">Batch *</label>
                    <div className="flex gap-4">
                      {["Morning", "Afternoon", "Evening", "Weekends"].map(
                        (b) => (
                          <label key={b}>
                            <input
                              type="checkbox"
                              value={b}
                              onChange={handleBatchChange}
                            />{" "}
                            {b}
                          </label>
                        )
                      )}
                    </div>
                  </div>
                  {validationError.preferredBatch && (
                    <p className="text-red-500 text-sm text-center">
                      {validationError.preferredBatch}
                    </p>
                  )}

                  <div className="flex items-center">
                    <label className="w-1/4 font-medium">Timing *</label>
                    <div className="flex gap-4">
                      {["6:00-7:30 PM", "7:00-9:00 PM", "7:00-9:00 AM"].map(
                        (t) => (
                          <label key={t}>
                            <input
                              type="radio"
                              name="preferredTiming"
                              value={t}
                              onChange={handleRegister}
                            />{" "}
                            {t}
                          </label>
                        )
                      )}
                    </div>
                  </div>
                  {validationError.preferredTiming && (
                    <p className="text-red-500 text-sm text-center">
                      {validationError.preferredTiming}
                    </p>
                  )}
                </div>
              </div>

              <div className="border border-black rounded p-3 pt-4 my-5 relative">
                <span className="absolute -top-4 bg-white px-2 text-lg text-cyan-800">
                  Address
                </span>

                <div className="grid gap-3">
                  <textarea
                    name="address"
                    value={userData.address}
                    onChange={handleRegister}
                    className="border rounded px-3 py-1"
                  />
                  {validationError.address && (
                    <p className="text-red-500 text-sm text-end">
                      {validationError.address}
                    </p>
                  )}

                  <input
                    name="city"
                    value={userData.city}
                    onChange={handleRegister}
                    className="border rounded px-3 py-1"
                    placeholder="City"
                  />
                  {validationError.city && (
                    <p className="text-red-500 text-sm text-end">
                      {validationError.city}
                    </p>
                  )}

                  <input
                    name="pinCode"
                    value={userData.pinCode}
                    onChange={handleRegister}
                    className="border rounded px-3 py-1"
                    placeholder="PIN Code"
                  />
                  {validationError.pinCode && (
                    <p className="text-red-500 text-sm text-end">
                      {validationError.pinCode}
                    </p>
                  )}
                </div>
              </div>

              <div className="flex gap-3">
                <button
                  type="reset"
                  className="bg-red-600 text-white px-4 py-1 rounded"
                >
                  Clear
                </button>
                <button className="bg-blue-600 text-white px-4 py-1 rounded">
                  Submit
                </button>
              </div>
            </div>
          </form>
        </main>
      </div>
    </>
  );
};

export default App;
