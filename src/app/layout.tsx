import type { Metadata } from "next";
import { Lato, Montserrat, Poppins } from "next/font/google";
// import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { cn } from "@/utils/tailwind-clsx";
import "./globals.css";

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-subtitle",
  display: "swap"
});

const poppins = Poppins({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  variable: "--font-title",
  display: "swap"
});

const lato = Lato({
  subsets: ["latin"],
  style: ["normal", "italic"],
  weight: ["100", "300", "400", "700", "900"],
  variable: "--font-body",
  display: "swap"
});

// TODO: Add your metadata here
export const metadata: Metadata = {
  title: "Your Surf Shop",
  description: "Find your perfect wave with our surf gear."
};

export default function RootLayout({
  children
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={cn(
          "min-h-screen bg-background font-sans antialiased",
          montserrat.variable,
          poppins.variable,
          lato.variable
        )}
      >
        <Header />
        {children}
        {/* <Footer /> */}
      </body>
    </html>
  );
}
