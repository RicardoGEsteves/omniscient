import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { constructMetadata } from "@/lib/metadata";

import { ModalProvider } from "@/components/modal-provider";

import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata = constructMetadata();

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={inter.className}>
          <ModalProvider />
          {children}
        </body>
      </html>
    </ClerkProvider>
  );
}
