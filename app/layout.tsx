import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "FINSHIELD — Predict. Locate. Act.",
  description: "Predictive Cybercrime Intelligence Platform — SIH Prototype",
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  );
}
