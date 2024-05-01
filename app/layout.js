import { Inter } from "next/font/google";
import NavBar from "./components/nav-bar";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vercel",
  description: "E-commerce site dashboard",
  keywords: "ecommerce, dashboard, online store, analytics",
  author: "Vercel",
  viewport: "width=device-width, initial-scale=1.0",
};

export default async function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex bg-gray-100`}>
        <NavBar />
        <div className="w-full">{children}</div>
      </body>
    </html>
  );
}
