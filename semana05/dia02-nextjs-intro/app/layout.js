import Link from "next/link";

import { Inter, Poppins } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });
// const poppins = Poppins({ subsets: ["latin"], weight: "900" });

export const metadata = {
  title: "Hola Nextjs",
  description: "Generated by create next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <nav>
          <Link href='/'>Home</Link>
          <Link href='/about'>About</Link>
          <Link href='/profile'>Profile</Link>
        </nav>

        {children}
      </body>
    </html>
  );
}
