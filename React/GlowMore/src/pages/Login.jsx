import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    userName: "",
    password: "",
  });

  const handleLogin = (e) => {
    const { name, value } = e.target;
    setLoginData((prevData) => ({ ...prevData, [name]: value }));
  };

  const handleClear = () => {
    setLoginData({
      userName: "",
      password: "",
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    try {
      console.log(loginData);
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
            <h1>User Login</h1>
          </div>
          <div className="container border rounded bg-amber-100 border-black w-100 py-15">
            <form onReset={handleClear} onSubmit={handleSubmit}>
              <div>
                <label htmlFor="userName" className="font-bold">
                  User Name
                </label>
                <input
                  type="text"
                  name="userName"
                  value={loginData.userName}
                  onChange={handleLogin}
                  placeholder="User Name"
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
                  value={loginData.password}
                  onChange={handleLogin}
                  placeholder="Password"
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
                  Login
                </button>
              </div>
            </form>
          </div>
        </div>
      </center>
    </>
  );
};

export default Login;
