import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import { ConvexClientProvider } from "@/components/ConvexClientProvider";
import { ClerkProvider } from "@clerk/nextjs";

// const geistSans = Geist({
//   variable: "--font-geist-sans",
//   subsets: ["latin"],
// });

// const geistMono = Geist_Mono({
//   variable: "--font-geist-mono",
//   subsets: ["latin"],
// });

const inter=Inter({subset:['latin']})

export const metadata = {
  title: "Spliter",
  description: "A smartest way to split expenceses",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link rel="icon" href="./logo/logo-s.png" sizes="any"></link>
      </head>
      <body
        // className={`${geistSans.variable} ${geistMono.variable} antialiased`}
        className={`${inter.className}`}
      >
        <ClerkProvider>
          <ConvexClientProvider>
            <Header />
            <main className="min-h-screen">{children}</main>
          </ConvexClientProvider>
        </ClerkProvider>

      </body>
    </html>
  );
}
