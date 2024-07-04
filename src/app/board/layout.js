import Navbars from "@/components/Navbars";

// src/app/layout.js
export const metadata = {
  title: "Board",
  description: "Board next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>
        <header style={{height: "100px", background : 'pink'}}>
          <Navbars />
        </header>
        {children}</body>
    </html>
  );
}
