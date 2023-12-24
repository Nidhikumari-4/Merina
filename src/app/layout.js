"use client";

import { Inter } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";
import { Toaster } from "react-hot-toast";
import { useRouter } from "next/navigation";

const inter = Inter({ subsets: ["latin"] });

export default function RootLayout({ children }) {
  const router = useRouter();

  // Check if token is present in local storage if not redirect to login page
  if (typeof window !== "undefined") {
    if (!localStorage.getItem("token")) {
      router.push("/login");
    } else {
      router.push("/dashboard");
    }
  }

  return (
    <html lang="en">
      <head>
        <link
          id="theme-link"
          rel="stylesheet"
          href="/themes/lara-light-blue/theme.css"
        ></link>
      </head>

      <body className={inter.className}>
        <PrimeReactProvider>{children}</PrimeReactProvider>
        <Toaster />
      </body>
    </html>
  );
}
