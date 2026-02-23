import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";

const jakarta = Plus_Jakarta_Sans({
  subsets: ["latin"],
  variable: "--font-jakarta",
  display: "swap",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  title: "CareDose — Never Miss a Dose. Never Worry Alone.",
  description:
    "CareDose is a simple medication and supplement tracker for older adults and their caregivers. One-tap logging, daily adherence scores, and real-time peer-to-peer monitoring — so no one manages medications alone.",
  keywords: [
    "medication tracker",
    "pill reminder",
    "caregiver app",
    "medication adherence",
    "elderly medication",
    "dose tracker",
    "peer medication monitoring",
    "caregiver notifications",
    "supplement tracker",
  ],
  openGraph: {
    title: "CareDose — Never Miss a Dose. Never Worry Alone.",
    description:
      "Simple medication tracking for patients. Real-time peace of mind for caregivers. Built for both sides of care.",
    type: "website",
    locale: "en_US",
    siteName: "CareDose",
  },
  twitter: {
    card: "summary_large_image",
    title: "CareDose — Never Miss a Dose. Never Worry Alone.",
    description:
      "Simple medication tracking for patients. Real-time peace of mind for caregivers.",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className={`${jakarta.variable} scroll-smooth`}>
      <body className="font-sans antialiased bg-surface text-txt">
        {children}
      </body>
    </html>
  );
}
