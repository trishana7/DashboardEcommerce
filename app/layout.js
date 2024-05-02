import { Inter } from "next/font/google";
import { AuthProvider } from "./Providers";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Vercel",
  description: "E-commerce site dashboard",
  keywords: "ecommerce, dashboard, online store, analytics",
  author: "Vercel",
  viewport: "width=device-width, initial-scale=1.0",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
