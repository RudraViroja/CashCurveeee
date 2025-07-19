import { Geist, Geist_Mono, Inter } from "next/font/google";
import "./globals.css";
import {
  ClerkProvider,
  SignInButton,
  SignUpButton,
  SignedIn,
  SignedOut,
  UserButton,
} from '@clerk/nextjs'
import Header from "@/components/header";
import { Toaster } from "sonner";

const inter = Inter({subsets: ["latin"]})

export const metadata = {
  title: "Financial Oprimizer",
  description: "One stop finanace platform",
};

export default function RootLayout({ children }) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body
          className={`${inter.className}`}
        >
          <Header />

          <main className="min-h-screen">
            {children}
          </main>
          <Toaster richColors/>
          
          <footer className="bg-blue-50 py-12">
            <div className="container mx-auto ph-4 text-center text-gray-600">
              <p>Made with 💗 by BitByBit</p>
            </div>
          </footer>
        </body>
      </html>
    </ClerkProvider>
  );
}
