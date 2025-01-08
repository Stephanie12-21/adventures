import "./globals.css";

export const metadata = {
  title: "Adventures",
  description: "Adventures - Votre passerelle vers des voyages inoubliables",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
