import Image from 'next/image';
export default function Header() {
  return (
    <header className="relative z-50 w-full flex items-center justify-between px-4 py-4 bg-[#171717]/90 backdrop-blur-sm border-b border-[#525252]/20 font-poppins">
      <div className="flex items-center ">
        <Image
          src="/logo.png"
          width={40}
          height={40}
          alt="site logo"
          className="rounded-full"
        />
      </div>
      <div className="flex items-center gap-2 border border-[#525252] rounded-full p-2 bg-[#262626] ">
        <a href="mailto:darkwak@live.com">
          <Image src="/email.svg" width={15} height={20} alt="mail logo" />
        </a>
        <a href="https://github.com/kwabenadarkwa">
          <Image src="/github.svg" width={15} height={15} alt="github logo" />
        </a>

        <a href="https://www.linkedin.com/in/kwabenadarkwaobengyeboah/">
          <Image
            src="/linkedin.svg"
            width={15}
            height={15}
            alt="linkedin logo"
          />
        </a>
      </div>
    </header>
  );
}
