import type { Metadata } from "next";
import "./globals.css";
import BaseLayout from "@/@core/layout";
import { Abel } from '@next/font/google';



export const metadata: Metadata = {
  title: "nhc assignment", // change the title of seo
  description: "nhc assignment description",
};

const abel = Abel({
  subsets: ['latin'],
  variable: '--font-abel',
  weight: '400'
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={abel.variable}>
      <body
        className="flex flex-col justify-between w-screen h-screen"
      >
        <BaseLayout>
        {children}
        </BaseLayout>
      </body>
    </html>
  );
}
