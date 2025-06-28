'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Navigation() {
  const pathname = usePathname();
  const navItems = [
    { name: 'Home', path: '/home' },
    { name: 'Projects', path: '/projects' },
    { name: 'Blog', path: '/blog' },
    { name: 'About', path: '/about' },
  ];

  return (
    <nav className="flex flex-row gap-4 p-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`cursor-pointer ${
            pathname === item.path ? 'font-bold text-blue-500' : ''
          }`}
        >
          {item.name}
        </Link>
      ))}
    </nav>
  );
}
