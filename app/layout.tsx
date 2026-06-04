import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "PriceLab – A/B Test Your SaaS Pricing Page",
  description: "Optimize your SaaS pricing page with A/B testing. Test button colors, copy, and pricing structures to maximize conversions."
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <script defer src="https://umami.microtool.dev/script.js" data-website-id="d25f2e52-9a77-4ca7-9efa-0b863b7a9358"></script>
      </head>
      <body className="bg-[#0d1117] text-[#c9d1d9] antialiased">{children}</body>
    </html>
  );
}
