import { Inter } from "next/font/google";
import Navbar from "@/components/Navbar";
import Providers from "./providers";
import "./globals.css";

const inter = Inter(
  { 
    subsets: ["latin"],
    display: 'swap',
    fallback: ['system-ui'],
  }
);

export const metadata = {
  title: "NextJS Tutorial",
  description: "Build awesome stuff with NextJS",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Navbar />
        <main>
          <Providers>
            {children}
          </Providers>
        </main>
      </body>
    </html>
  );
}
