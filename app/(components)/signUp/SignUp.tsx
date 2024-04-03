import Link from "next/link";
import React, { FormEvent, useState } from "react";

export default function SignUp() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    if (!name || !email || !password) {
      setError("All fields are required");
      return;
    }

    try {
      const res = await fetch("api/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ name, email, password }),
      });
      if (res.ok) {
        setName("");
        setEmail("");
        setPassword("");
      } else {
        console.log("User registration failed");
      }
    } catch (error) {
      console.error("Error occurred while user registration");
    }
  };

  return (
    <div className="bg-white">
      <div className="text-white-500 text-md flex justify-center items-center gap-10 font-bold p-10 ">
        <Link href="/" className="hover:underline shadow-2xl">
          Register
        </Link>
      </div>
      <div className="flex justify-center pt-0  ">
        <form className="bg-white shadow-2xl rounded px-8 pb-8 mb-4 w-[600px]">
          <div className="mb-4 pt-12">
            <label className="block text-gray-700 text-sm  mb-2" htmlFor="name">
              Name
            </label>
            <input
              onChange={(e) => setName(e.target.value)}
              className="shadow-xl  border rounded w-full py-2 px-3 text-gray-700 "
              id="name"
              type="text"
              placeholder="Enter your name"
            />
          </div>
          <div className="mb-4">
            <label
              className="block text-gray-700 text-sm  mb-2"
              htmlFor="email"
            >
              Email Address
            </label>
            <input
              onChange={(e) => setEmail(e.target.value)}
              className="shadow-xl  border rounded w-full py-2 px-3 text-gray-700 "
              id="email"
              type="text"
              placeholder="Enter your email"
            />
          </div>
          <div className="mb-6">
            <label
              className="block text-gray-700 text-sm  mb-2"
              htmlFor="password"
            >
              Password
            </label>
            <input
              onChange={(e) => setPassword(e.target.value)}
              className="shadow-xl  border rounded w-full py-2 px-3 text-gray-700 "
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          {error && (
            <div className="mb-6 bg-red-400 rounded-xl w-[180px] h-10 flex justify-center items-center">
              {error}
            </div>
          )}
          <div className="flex items-center justify-between">
            <button
              type="submit"
              onClick={handleSubmit}
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
            >
              Sign Up
            </button>

            <Link href="/">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg"
                type="button"
              >
                Log In
              </button>
            </Link>
          </div>
        </form>
      </div>
    </div>
  );
}
