import type { Metadata } from "next";
import "./main.scss";
import Navigation from "./components/Navigation";

export const metadata: Metadata = {
  title: "Boys to Leaders",
  description: "Empowering young men through mentorship and skill development",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=Poppins:wght@300;400;500;600;700&family=Roboto:wght@300;400;500;700&display=swap" rel="stylesheet" />
      </head>
      <body>
        <Navigation />
        <div className="app-container">
          {children}
        </div>
      </body>
    </html>
  );
}
