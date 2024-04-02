import Link from "next/link";
import React from "react";

export default function Signup() {
  return (
    <div className="bg-white">
      <div className="text-white-500 text-md flex justify-center items-center gap-10 font-bold p-10 ">
        <Link href="/" className="hover:underline shadow-2xl">
          Register
        </Link>
      </div>
      <div className="  flex justify-center  pt-0">
        <div className="bg-white shadow-2xl rounded px-8 pb-8 mb-4 w-[600px]">
          <div className="mb-4 pt-12">
            <label className="block text-gray-700 text-sm  mb-2" htmlFor="name">
              Name
            </label>
            <input
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
              className="shadow-xl  border rounded w-full py-2 px-3 text-gray-700 "
              id="password"
              type="password"
              placeholder="Enter your password"
            />
          </div>
          <div className="mb-6 bg-red-400 rounded-xl w-[180px] h-10 flex justify-center items-center">
            Error message
          </div>
          <div className="flex items-center justify-between">
            <button
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-lg"
              type="button"
            >
              Sign Up
            </button>

            <Link href="/">
              <button
                className="bg-yellow-500 hover:bg-yellow-700 text-white font-bold py-2 px-4 rounded-lg"
                type="button"
              >
                LogIn
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}
