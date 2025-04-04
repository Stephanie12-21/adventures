import "./globals.css";

export const metadata = {
  title: "Zaha",
  description:
    "Zaha - Votre passerelle vers des voyages inoubliables à travers les merveilles de Madagascar",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
