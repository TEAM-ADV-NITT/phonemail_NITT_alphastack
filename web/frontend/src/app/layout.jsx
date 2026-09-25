import { Space_Grotesk } from "next/font/google";
import "./globals.css";


const spaceGrotesk = Space_Grotesk({
  subsets: ["latin"],
});

export const metadata = {
  title: "PhoneMail",
  description: "Email, built around your phone number.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
       <body className={spaceGrotesk.className}>{children}</body>
    </html>
  );
}
