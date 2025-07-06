import type { Metadata } from 'next';
import {
  JetBrains_Mono,
 Poppins,Cookie, Lugrasimo
} from 'next/font/google';
import './globals.css';
import Header from './_components/header';
import Navigation from './_components/navigation';
import Footer from './_components/footer';

const poppins = Poppins({
  variable: '--font-poppins',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
});

const lugrasimo = Lugrasimo({
  variable: '--font-lugrasimo',
  subsets: ['latin'],
  weight: ['400'],
});

const cookie = Cookie({
  variable: '--font-cookie',
  subsets: ['latin'],
  weight: ['400'],
});

const jetbrainsmono = JetBrains_Mono({
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
      <body className={`${jetbrainsmono.variable} ${poppins.variable} ${cookie.variable} ${lugrasimo}`}>
        <div className="min-h-screen flex flex-col max-w-[50%] mx-auto bg-[#171717]">
          <Header />
          <Navigation />
          <main className="flex-1">{children}</main>
          <Footer />
        </div>
      </body>
    </html>
  );
}
