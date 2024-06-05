import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "UTOPIA//ENGINE",
  description:
    "Utopia represents a pioneering venture in AI-facilitated content generation, meticulously crafted to sculpt an infinitely vast and dynamic open universe.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-black text-[#999]">{children}</body>
    </html>
  );
}
