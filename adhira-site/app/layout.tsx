import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "next-themes";
import ChatWidget from "@/components/ChatWidget";
import { site } from "@/lib/content";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Adhira Choudhury — I build and scale AI products",
  description:
    "AI engineer and strategist. CS & AI from Georgia Tech in two years. I build AI products from architecture to business case, and take them to scale.",
  icons: {
    icon: [{ url: site.icon, type: "image/png" }],
    apple: site.icon,
    shortcut: site.icon,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={inter.className}>
        <ThemeProvider
        attribute="class"
        enableSystem
        disableTransitionOnChange>
          {children}
          <ChatWidget />
        </ThemeProvider>
      </body>
    </html>
  );
}