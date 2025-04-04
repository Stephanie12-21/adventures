import "./globals.css";

export const metadata = {
  title: "Adventures",
  description:
    "Adventures - Votre passerelle vers des voyages inoubliables à travers les merveilles du monde entier",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
