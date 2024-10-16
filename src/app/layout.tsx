import type { Metadata } from "next";
import "./globals.css";
import BaseLayout from "@/@core/layout";



export const metadata: Metadata = {
  title: "nhc assignment", // change the title of seo
  description: "nhc assignment description",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        
      >
        <BaseLayout>
        {children}
        </BaseLayout>
      </body>
    </html>
  );
}
