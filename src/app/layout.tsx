import type { Metadata } from "next";
import {  Urbanist } from "next/font/google";
import "./globals.css";
import { ToastContainer } from "react-toastify";

const urbanist = Urbanist({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Digital Tech Bolg",
  description: "digitaltech Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${urbanist.className} ${
          process.env.NODE_ENV === "development" ? "debug-screens" : ""
        }`}
      >
        {children}
      </body>
    </html>
  );
}
