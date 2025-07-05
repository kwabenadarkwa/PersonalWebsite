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

  const isActive = (path: string) => {
    if (path === '/') {
      return pathname === '/';
    }
    return pathname?.startsWith(path);
  };

  return (
    <nav className="flex flex-row gap-4 pt-8 pb-20 font-main">
      {navItems.map((item) => (
        <Link
          key={item.name}
          href={item.path}
          className={`cursor-pointer ${isActive(item.path)
              ? 'w-auto px-1.5 border border-[#525252] rounded-full bg-[#404040]'
              : ''
            }`}
        >
          {isActive(item.path) ? (
            <>
              <div className="flex flex-row items-center gap-1.5 ">
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
