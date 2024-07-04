import { Inter } from "next/font/google";
import "./globals.css";
import Navbars from "@/components/Navbars";

// src/app/layout.js
const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Board App HOME",
  description: "Board next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>

        <header style={{height: "100px", background : 'pink'}}>
          <Navbars />
        </header>

        {children}

        <footer>
          footer
        </footer>
      </body>
      
      
    </html>
  );
}
