import { Inter } from "next/font/google";
import "./globals.css";
import { PrimeReactProvider } from "primereact/api";
import "primereact/resources/themes/lara-light-blue/theme.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Merina",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
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
      </body>
    </html>
  );
}
