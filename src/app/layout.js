import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { DefaultFooter, DefaultHeader } from "./_components/MainLayout";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "Book Store",
  description: "Book Store",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <DefaultHeader />
        <main className="dark:bg-gray-900">{children}</main>
        <DefaultFooter />
      </body>
    </html>
  );
}
