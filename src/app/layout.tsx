import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Campus Search - Find Your Perfect College",
  description:
    "Search, compare, and discover colleges with detailed information about courses, placements, and reviews",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
