import type { Metadata } from "next";
import { Cormorant_Garamond, Outfit } from "next/font/google";
import { Header } from "@/components/Header";
import { ThemeProvider } from "@/components/providers/ThemeProvider";
import { site } from "@/content/content";
import "./globals.css";

const display = Cormorant_Garamond({
  subsets: ["latin"],
  variable: "--font-cormorant",
  weight: ["400", "500", "600", "700"],
});

const sans = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
});

export const metadata: Metadata = {
  title: {
    default: `${site.name} · ${site.owner}`,
    template: `%s · ${site.name}`,
  },
  description: site.description,
  keywords: [
    "bridal makeup Delhi NCR",
    "Rachna Bhardwaj",
    "RBS Make-Over",
    "RBS makeover",
    "airbrush bridal",
    "unisex salon",
  ],
  openGraph: {
    title: `${site.name} · Makeup by ${site.owner}`,
    description: site.description,
    type: "website",
    locale: "en_IN",
  },
  metadataBase: new URL("https://rbsmakeoverstudio.example"),
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${display.variable} ${sans.variable} h-full`}
    >
      <body className="min-h-full bg-bg font-sans text-fg antialiased">
        <ThemeProvider>
          <Header />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
