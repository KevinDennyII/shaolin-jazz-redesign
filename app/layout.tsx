import type { Metadata } from "next";
import "./globals.css";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "SHAOLIN JAZZ - Hip-Hop, Jazz & Martial Arts Culture",
  description: "SHAOLIN JAZZ is a creative brand that produces events and develops content highlighting the intersections of Hip Hop, Jazz and Martial Arts culture.",
  keywords: ["Shaolin Jazz", "Hip-Hop", "Jazz", "Martial Arts", "Music", "Events", "Culture"],
  openGraph: {
    title: "SHAOLIN JAZZ",
    description: "Producing events and creating content that highlight the intersections between Hip-Hop, Jazz, and Martial Arts culture.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">
        <Navigation />
        <main className="min-h-screen">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
