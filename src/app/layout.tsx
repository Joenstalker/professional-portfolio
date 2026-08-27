import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://joenilacero.vercel.app"),
  title: {
    default: "Joenil Acero | Full-Stack Developer Portfolio",
    template: "%s | Joenil Acero",
  },
  description:
    "Joenil Acero — Full-stack developer specializing in web apps, desktop systems, and interactive games. Explore projects, skills, and professional portfolio.",
  keywords: [
    "Joenil Acero",
    "Full-Stack Developer",
    "Portfolio",
    "Web Developer",
    "Software Engineer",
    "React",
    "Next.js",
    "TypeScript",
    "Philippines Developer",
  ],
  authors: [{ name: "Joenil Acero" }],
  creator: "Joenil Acero",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://joenilacero.vercel.app",
    siteName: "Joenil Acero Portfolio",
    title: "Joenil Acero | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer specializing in web apps, desktop systems, and interactive games. Explore projects, skills, and professional portfolio.",
  },
  twitter: {
    card: "summary_large_image",
    title: "Joenil Acero | Full-Stack Developer Portfolio",
    description:
      "Full-stack developer specializing in web apps, desktop systems, and interactive games. Explore projects, skills, and professional portfolio.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  userScalable: false,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider
          attribute="class"
          defaultTheme="system"
          enableSystem
          disableTransitionOnChange
        >
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
