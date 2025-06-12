import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import "./globals.css";
import Navbar from "./components/navbar";
import { ClerkProvider } from "@clerk/nextjs";
import { CartProvider } from "./components/cartContext"; 

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
          <CartProvider>
            <Navbar />
           <div className="">
             {children}
            {modal}
           </div>
          </CartProvider>
        </ClerkProvider>
      </body>
    </html>
  );
}