import type { Metadata } from "next";
import { Poppins } from "next/font/google";
import { ClerkProvider } from "@clerk/nextjs";
import { Analytics } from "@vercel/analytics/react";
import { SpeedInsights } from "@vercel/speed-insights/next";

import "./globals.css";

const poppins = Poppins({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
  variable: "--font-poppins",
});

export const metadata: Metadata = {
  title: "MyTicket - RMUTP Event Platform", // More descriptive title
  description:
    "RmutpTicket is an innovative event management platform for the RMUTP community. It features ticket booking, event scheduling, and interactive maps, making campus event organization and participation seamless and efficient.",
  // Shortened and optimized the description for better SEO.
  icons: {
    icon: "/assets/icons/logo.png", // Ensure this path is correct and accessible
    // appleTouchIcon: '/assets/images/apple-touch-icon.png', // Add Apple touch icon for better mobile experience
    // favicon32: '/assets/images/favicon-32x32.png', // Add 32x32 favicon
    // favicon16: '/assets/images/favicon-16x16.png', // Add 16x16 favicon
  },
  // // Added more icon sizes for various devices
  // og: {
  //   type: 'website',
  //   url: 'https://myticket.zofirst.dev', // Replace with your actual URL
  //   title: 'MyTicket - RMUTP Event Platform',
  //   description: 'Join the RMUTP community in seamless event organization and participation with RmutpTicket.',
  //   image: '/assets/images/social-preview.png', // Social media preview image
  // },
  // // Added Open Graph metadata for better social media sharing
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <ClerkProvider>
      <html lang="en">
        <body className={poppins.variable}>
          {children}
          <Analytics />
          <SpeedInsights />
          <script
            type="text/javascript"
            src="https://cookiecdn.com/cwc.js"
          ></script>
          <script
            id="cookieWow"
            type="text/javascript"
            src="https://cookiecdn.com/configs/T7upc61BjMfDwh5ZzwStUDfC"
            data-cwcid="T7upc61BjMfDwh5ZzwStUDfC"
          ></script>
        </body>
      </html>
    </ClerkProvider>
  );
}
