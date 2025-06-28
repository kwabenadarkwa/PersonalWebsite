import type { Metadata } from 'next';
import { JetBrains_Mono, /* Geist */ /* Geist_Mono */Poppins } from 'next/font/google';
import './globals.css';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const jetBrainsMono = JetBrains_Mono({
  variable: '--font-jetbrains-mono',
  subsets: ['latin'],
});

export const metadata: Metadata = {
  title: 'Personal Website',
  description: 'Personal website for me and my wife',
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${jetBrainsMono.variable} ${poppins.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
