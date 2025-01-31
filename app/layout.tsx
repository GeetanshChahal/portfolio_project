import type { Metadata } from "next";
import { Inter } from "next/font/google";

import "./globals.css";
import { ThemeProvider } from "./provider";
import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/next";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  metadataBase: new URL("https://www.geetanshchahal.in"),
  title: "Geetansh Chahal",
  description:
    "The official portfolio of Geetansh Chahal, showcasing his skills, experience, and projects.",
  keywords: [
    "Geetansh Chahal",
    "portfolio",
    "software engineer",
    "web developer",
    "full-stack developer",
    "projects",
    "tech stack",
  ],
  authors: [{ name: "Geetansh Chahal", url: "https://www.geetanshchahal.in" }],
  openGraph: {
    title: "Geetansh Chahal's Portfolio",
    description:
      "Discover the portfolio of Geetansh Chahal, a software engineer passionate about web development and technology.",
    url: "https://www.geetanshchahal.in",
    siteName: "Geetansh Chahal Portfolio",
    images: [
      {
        url: "/GC-avtar-logo.png",
        width: 800,
        height: 800,
        alt: "Geetansh Chahal Portfolio Logo",
      },
    ],
    type: "website",
  },
  // twitter: {
  //   card: "summary_large_image",
  //   title: "Geetansh Chahal's Portfolio",
  //   description:
  //     "Discover the portfolio of Geetansh Chahal, a software engineer passionate about web development and technology.",
  //   images: ["/GC-avtar-logo.png"],
  // },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Person",
    name: "Geetansh Chahal",
    jobTitle: "Software Engineer",
    url: "https://www.geetanshchahal.in",
    image: "/GC-avtar-logo.png",
    sameAs: [
      "https://www.linkedin.com/in/geetansh-chahal-b7473b1b4/",
      "https://github.com/GeetanshChahal",
      "https://dev.to/geetanshchahal",
    ],
  };

  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <link rel="icon" href="/GC-avtar-logo.png" sizes="any" />
        {/* Structured Data for SEO */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }}
        />
      </head>
      <body className={inter.className}>
        <ThemeProvider
          attribute="class"
          defaultTheme="dark"
          enableSystem
          disableTransitionOnChange
        >
          {children}
          <SpeedInsights />
          <Analytics />
        </ThemeProvider>
      </body>
    </html>
  );
}
