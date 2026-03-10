import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geist = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "三軒茶屋チラシ比較くん",
  description: "三軒茶屋周辺のスーパーマーケットのチラシ情報を比較・分析するアプリ",
  manifest: "/sancha-chirashi-pwa/manifest.json",
  appleWebApp: {
    capable: true,
    statusBarStyle: "black-translucent",
    title: "チラシ比較",
  },
  formatDetection: {
    telephone: false,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ja">
      <head>
        <meta name="viewport" content="width=device-width, initial-scale=1, viewport-fit=cover" />
        <meta name="theme-color" content="#10b981" />
        <link rel="icon" href="/sancha-chirashi-pwa/favicon.ico" />
        <link rel="apple-touch-icon" href="/sancha-chirashi-pwa/apple-touch-icon.png" />
      </head>
      <body className={`${geist.variable} ${geistMono.variable} antialiased`}>
        {children}
        <script>{`
          if ('serviceWorker' in navigator) {
            navigator.serviceWorker.register('/sancha-chirashi-pwa/sw.js').catch(err => console.log('SW registration failed:', err));
          }
        `}</script>
      </body>
    </html>
  );
}
