// src/app/layout.js
export const metadata = {
  title: "Edit Board",
  description: "Board next app",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
