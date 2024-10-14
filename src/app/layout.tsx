'use client'

import "./globals.css";
import { Inter } from 'next/font/google';
import {BottomMenu} from "@/components/bottom-menu";
import {ThemeProvider} from "@/components/theme-provider";
import {Header} from "@/components/header";
import {useEffect} from "react";

const inter = Inter({
    subsets: ['latin']
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
    useEffect(() => {
        if ('serviceWorker' in navigator) {
            window.addEventListener('load', () => {
                navigator.serviceWorker
                    .register('/service-worker.js')
                    .then(registration => {
                        console.log('Service Worker registered with scope:', registration.scope);
                    })
                    .catch(error => {
                        console.error('Service Worker registration failed:', error);
                    });
            });
        }
    }, []);

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