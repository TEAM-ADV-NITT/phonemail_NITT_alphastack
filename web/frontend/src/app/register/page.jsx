"use client";

import Button from "@/components/ui/Button";
import { useSearchParams } from "next/navigation";
import { useState, Suspense } from "react";

function Register() {
  const searchParams = useSearchParams();
  const [success, setSuccess] = useState(false);
  const phone = searchParams.get("phone");

  const [fullName, setFullName] = useState("");
  const [username, setUsername] = useState("");

  async function handleUser() {
    const response = await fetch(
      "http://localhost:4000/api/auth/register",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          phone: phone,
          full_name: fullName,
          username: username,
        }),
      }
    );

    const data = await response.json();

    if (response.ok) {
      setSuccess(true);
    } else {
      console.log(data.message);
    }
  }

  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-zinc-900 px-6">
      <div className="w-full max-w-md">
        {/* Heading */}
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Create your account
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-400 sm:text-base">
            Set up your PhoneMail account in just a few steps.
          </p>
        </div>

        {/* Form */}
        <div className="mt-8 space-y-5">
          {/* Full Name */}
          <div>
            <label
              htmlFor="full-name"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Full name
            </label>

            <input
              id="full-name"
              type="text"
              onChange={(e) => setFullName(e.target.value)}
              placeholder="Aditya Kumar"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none placeholder:text-zinc-600 focus:border-zinc-500"
            />
          </div>

          {/* Username */}
          <div>
            <label
              htmlFor="username"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Username
            </label>

            <input
              id="username"
              type="text"
              onChange={(e) => setUsername(e.target.value)}
              placeholder="aditya"
              className="w-full rounded-xl border border-zinc-700 bg-zinc-800 px-4 py-3 text-white outline-none placeholder:text-zinc-600"
            />
          </div>

          {/* Phone Number */}
          <div>
            <label
              htmlFor="phone"
              className="mb-2 block text-sm font-medium text-zinc-300"
            >
              Phone number
            </label>

            <div className="flex overflow-hidden rounded-xl border border-zinc-700 bg-zinc-800">
              <span className="flex items-center border-r border-zinc-700 px-4 text-sm text-zinc-400">
                +91
              </span>

              <input
                id="phone"
                type="tel"
                value={phone || ""}
                disabled
                className="w-full bg-transparent px-4 py-3 text-zinc-500 outline-none"
              />
            </div>
          </div>

          <Button onClick={handleUser} className="w-full">
            Create Account
          </Button>
        </div>

        {success && (
          <p className="mt-6 text-center text-sm text-green-400">
            Account created successfully!
          </p>
        )}
      </div>
    </main>
  );
}

export default function RegisterPage() {
  return (
    <Suspense fallback={<div className="min-h-screen bg-zinc-900" />}>
      <Register />
    </Suspense>
  );
}