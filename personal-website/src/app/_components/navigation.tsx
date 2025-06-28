'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Image from 'next/image';

export default function Navigation() {
  const pathname = usePathname();
  const navItems = [
    { name: 'Home', path: '/', image: '/home.svg' },
    { name: 'Projects', path: '/projects', image: '/project.svg' },
    { name: 'Blog', path: '/blog', image: '/blog.svg' },
    { name: 'About', path: '/about', image: '/about.svg' },
  ];

  return (
    <nav className="flex flex-row gap-4 p-4">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`cursor-pointer ${
            pathname === item.path
              ? 'w-auto px-1 border border-[#525252] rounded-full bg-[#262626]'
              : ''
          }`}
        >
          {pathname === item.path ? (
            <>
              <div className="flex flex-row items-center gap-1.5">
                <Image
                  src={item.image}
                  width={15}
                  height={15}
                  alt="site logo"
                  className="rounded-full"
                />
                {item.name}
              </div>
            </>
          ) : (
            item.name
          )}
        </Link>
      ))}
    </nav>
  );
}
