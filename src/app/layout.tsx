import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "Shopr",
  description: "",
};

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal?: React.ReactNode;
}>) {
  return (
    <html>
      <body
        className={`${poppins.className} antialiased overflow-x-hidden flex flex-col min-h-screen min-w-screen`}
      >
        <ClerkProvider>
          <Navbar />
          {children}
          {modal}
        </ClerkProvider>
      </body>
    </html>
  );
}

