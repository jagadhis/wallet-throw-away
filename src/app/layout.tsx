import type { Metadata } from "next";
import "./globals.css";
import { Inter } from 'next/font/google';
import {BottomMenu} from "@/components/bottom-menu";
import {ThemeProvider} from "@/components/theme-provider";
import {Header} from "@/components/header";

const inter = Inter({
    subsets: ['latin']
})

export const metadata: Metadata = {
  title: "Digital Wallet",
  description: "Wallet for micro badges",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
      <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
      <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
      >
          <Header />
          <div className="min-h-screen max-w-sm mx-auto">
              {children}
          </div>
          <BottomMenu/>
      </ThemeProvider>
      </body>
      </html>
  );
}