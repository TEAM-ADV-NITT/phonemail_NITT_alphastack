import Button from "@/components/ui/Button";
import Link from "next/link";

function Home() {
  return (
    <div className="flex min-h-screen w-full flex-col items-center justify-center bg-zinc-900 px-6 text-center">
      <h1 className="text-4xl font-semibold tracking-tight text-white sm:text-5xl md:text-6xl">
        PhoneMail
      </h1>

      <p className="mt-4 max-w-md text-sm leading-6 text-zinc-400 sm:text-base">
        Email, built around your phone number.
      </p>

      <Link href="/login"> <Button className="mt-8 w-full max-w-xs sm:w-auto">
        Get Started
      </Button>
      </Link>
    </div>
  );
}

export default Home;