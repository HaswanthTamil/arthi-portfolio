import "@/styles/globals.css";
import { Metadata } from "next";
import { poppins, robotoFlex, lexend } from "@/lib/fonts";

export const metadata: Metadata = {
  title: "Arthi M",
  description: "UI/UX Designer & Visual Creative",
  icons: {
    icon: "/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${poppins.variable} ${robotoFlex.variable} ${lexend.variable}`}
      >
        {children}
      </body>
    </html>
  );
}
