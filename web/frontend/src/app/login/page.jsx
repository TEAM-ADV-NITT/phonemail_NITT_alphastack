"use client";
import Button from "@/components/ui/Button";
import Link from "next/link";
import { useState } from "react";
import { useRouter } from "next/navigation";

function Login() {
  const router = useRouter();
  const [phone, setPhone] = useState("");
  const handleContinue = async () => {
  const response = await fetch(
    "http://localhost:4000/api/auth/check-phone",
    {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        phone: phone,
      }),
    }
  );

  const data = await response.json();

if (data.exists) {
  console.log("Account exists");
} else {
    router.push(`/register?phone=${phone}`);
}
};
  return (
    <main className="flex min-h-screen w-full items-center justify-center bg-zinc-900 px-6">
      <div className="w-full max-w-md">
        <div className="text-center">
          <h1 className="text-3xl font-semibold tracking-tight text-white sm:text-4xl">
            Welcome to PhoneMail
          </h1>

          <p className="mx-auto mt-3 max-w-sm text-sm leading-6 text-zinc-400 sm:text-base">
            Enter your phone number to continue or create an account.
          </p>
        </div>

        <div className="mt-8">
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
                maxLength={10}
                inputMode="numeric"
                placeholder="9876543210"
                value={phone}
                onChange={(e) => setPhone(e.target.value)}
                className="w-full bg-transparent px-4 py-3 text-white outline-none placeholder:text-zinc-600"
            />
          </div>
          <Button onClick={handleContinue} className="mt-5 w-full">
           Continue
          </Button>
        </div>
      </div>
    </main>
  );
}

export default Login;