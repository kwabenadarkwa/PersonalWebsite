import Image from 'next/image';
export default function Header() {
  return (
    <header className="w-full flex items-center justify-between px-4 py-4 bg-[#171717]">
      {/* Left: Logo and Site Title pinned to the left edge */}
      <div className="flex items-center ">
        <Image
          src="/vercel.svg"
          width={40}
          height={40}
          alt="site logo"
          className="rounded-full"
        />
      </div>
      {/* Right: Social Icons pinned to the right edge */}
      <div className="flex items-center gap-2 border border-[#525252] rounded-full p-2 bg-[#262626] ">
        {/*TODO: figure out how to make this icon the same size as the others*/}
        <Image src="/email.svg" width={15} height={20} alt="mail logo" />
        <Image src="/github.svg" width={15} height={15} alt="github logo" />
        <Image src="/linkedin.svg" width={15} height={15} alt="linkedin logo" />
      </div>
    </header>
  );
}
