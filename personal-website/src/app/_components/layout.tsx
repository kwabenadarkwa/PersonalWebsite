import Footer from './footer';
import Header from './header';
import Navigation from './navigation';
import { ReactNode } from 'react';

interface LayoutProps {
  children: ReactNode;
}
export default function Layout({ children }: LayoutProps) {
  return (
    <div className="max-w-[70%] mx-auto">
      <Header />
      <Navigation />
      {children}
      <Footer />
    </div>
  );
}
