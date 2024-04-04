import type { Metadata } from "next";
import { Figtree } from "next/font/google";
import "./globals.css";
import Sidebar from "../components/Sidebar";
import Player from "@/components/Player";
import Providers from "@/components/Provider/Provider";
import ModalProvider from "@/components/Provider/ModalProvider";
import { LayoutGroup } from "framer-motion";
import Loader from "@/components/Loader";
const font = Figtree({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TheBookHub",
  description: "Listen To Thousands Of Audio Books For Free",
  icons: {
    icon: '/icon.ico',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.ico" sizes="any" />
      <Providers>
        <body className={font.className }>
          <ModalProvider/>
          <Sidebar>{children}</Sidebar>
          
        </body>
        <Player />
      </Providers>
    </html>
  );
}
