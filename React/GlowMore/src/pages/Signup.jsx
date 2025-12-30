import { useState } from "react";

const Signup = () => {
  const [signUpData, setSignUpData] = useState({
    userName: "",
    email: "",
    phone: "",
    password: "",
    confirmPassword: "",
  });

  const handleSignup = (e) => {
    const { name, value } = e.target;
    setSignUpData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClear = () => {
    setSignUpData({
      userName: "",
      email: "",
      phone: "",
      password: "",
      confirmPassword: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      if(signUpData.password != signUpData.confirmPassword){
      alert("Password does not matched")
      console.warn("Password does not matched");
    } else{
      console.log(signUpData);
    }
    } catch (error) {
      console.log(error.meesage);
    }
    handleClear();
  };

  return (
    <>
      <center>
        <div>
          <div className="text-2xl font-bold mb-10">
            <h1>Sign Up</h1>
          </div>
          <div className="container border rounded bg-amber-100  border-black w-100 py-15">
            <form onReset={handleClear} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="userName" className="font-bold">
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  value={signUpData.userName}
                  onChange={handleSignup}
                  placeholder="User Name"
                  className="border rounded ms-3 mb-2"
                />
              </div>

              <div>
                <label htmlFor="email" className="font-bold">
                  Email
                </label>
                <input
                  type="email"
                  name="email"
                  value={signUpData.email}
                  onChange={handleSignup}
                  placeholder="Email"
                  className="border rounded ms-3 mb-2"
                />
              </div>

              <div>
                <label htmlFor="phone" className="font-bold">
                  Phone
                </label>
                <input
                  type="number"
                  name="phone"
                  value={signUpData.phone}
                  onChange={handleSignup}
                  placeholder="phone"
                  className="border rounded ms-3 mb-2"
                />
              </div>

              <div>
                <label htmlFor="password" className="font-bold">
                  Password
                </label>
                <input
                  type="password"
                  name="password"
                  value={signUpData.password}
                  onChange={handleSignup}
                  placeholder="Password"
                  className="border rounded ms-3 mb-3"
                />
              </div>

              <div>
                <label htmlFor="confirmPassword" className="font-bold">
                  Confirm Password
                </label>
                <input
                  type="password"
                  name="confirmPassword"
                  value={signUpData.confirmPassword}
                  onChange={handleSignup}
                  placeholder="Re-enter Password"
                  className="border rounded ms-3 mb-3"
                />
              </div>

              <div>
                <button
                  type="reset"
                  className="bg-red-500 rounded text-white font-bold p-1 hover:bg-black"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="bg-blue-500  rounded ms-3 text-white font-bold p-1 hover:bg-black"
                >
                  Sign Up
                </button>
              </div>
            </form>
          </div>
        </div>
      </center>
    </>
  );
};

export default Signup;
