import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "EduPal - Learn. Share. Pass. Together.",
  description: "EduPal is the digital learning hub built for university students — access past questions, join virtual classes, and collaborate with peers in one simple platform.",
  keywords: ["EduPal", "learning", "university", "students", "past questions", "virtual classes", "study", "collaboration"],
  authors: [{ name: "EduPal Team" }],
  openGraph: {
    title: "EduPal - Learn. Share. Pass. Together.",
    description: "The digital learning hub built for university students.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "EduPal - Learn. Share. Pass. Together.",
    description: "The digital learning hub built for university students.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body className="bg-background-light dark:bg-background-dark text-[#112218] dark:text-white font-display antialiased">
        {children}
      </body>
    </html>
  );
}
