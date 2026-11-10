
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "WebFix NG | Software Development & Digital Solutions",
  description:
    "WebFix NG builds modern websites, web applications, digital marketplaces and custom software solutions.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
