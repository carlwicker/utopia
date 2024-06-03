"use client";

import { useState } from "react";

function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e: any) => {
    e.preventDefault();
    // Handle login logic here
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col gap-4 md:w-1/3 text-white"
    >
      <label htmlFor="email" className="flex flex-col">
        Email
        <input
          type="email"
          id="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded text-black"
          required
        />
      </label>
      <label htmlFor="password" className="flex flex-col">
        Password
        <input
          type="password"
          id="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          className="mt-1 p-2 border border-gray-300 rounded text-black"
          required
        />
      </label>
      <button type="submit" className="mt-4 p-2 bg-blue-500 text-white rounded">
        Login
      </button>
    </form>
  );
}

export default LoginForm;
