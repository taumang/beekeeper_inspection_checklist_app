import React, { useState } from "react";
import { Link, useHistory } from "react-router-dom";

function LoginPage() {
  const [isLogin, setIsLogin] = useState(true);
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const history = useHistory();

  function handleSubmit(event) {
    event.preventDefault();
    // Perform authentication here, for the sake of simplicity, it is not implemented.
    history.push("/checklist");
  }

  return (
    <div className="h-screen bg-yellow-500 flex items-center justify-center">
      <form
        className="bg-white p-6 rounded-lg shadow-xl"
        onSubmit={handleSubmit}
      >
        <h2 className="text-xl font-bold mb-4">
          {isLogin ? "Login" : "Register"}
        </h2>
        <div className="mb-4">
          <label
            className="block font-bold mb-2 text-gray-700"
            htmlFor="username"
          >
            Username
          </label>
          <input
            type="text"
            id="username"
            className="w-full border border-gray-400 p-2 rounded-lg"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>
        <div className="mb-4">
          <label
            className="block font-bold mb-2 text-gray-700"
            htmlFor="password"
          >
            Password
          </label>
          <input
            type="password"
            id="password"
            className="w-full border border-gray-400 p-2 rounded-lg"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>
        <button
          className="bg-black px-4 py-2 rounded-full text-white hover:bg-white hover:text-black"
          type="submit"
        >
          Submit
        </button>
        <Link
          to="#"
          className="block mt-4 font-bold text-center text-black hover:text-white"
          onClick={() => setIsLogin(!isLogin)}
        >
          {isLogin ? "Not a member? Register" : "Already a member? Login"}
        </Link>
      </form>
    </div>
  );
}

export default LoginPage;
