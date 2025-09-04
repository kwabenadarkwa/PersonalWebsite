import Image from 'next/image';

export default function Footer() {
    return (
        <footer className="w-full text-[#A3A3A3] px-3 py-3 border-t border-[#262626] text-xs font-main">
            <div className="w-full flex justify-between items-center">
                <span>© 2025 KDOY</span>
                <Image
                    src="/logo.png"
                    width={18}
                    height={18}
                    alt="site logo"
                    className="rounded-full"
                />
            </div>

            <div className=" px-4 flex flex-col items-start">
                <span>
                    Version <span className="text-[#22c55e]"> 2025.</span>0.01{' '}
                </span>
                <div>Next.js</div>
                <div>
                    Source code:{' '}
                    <a
                        href="https://github.com/kwabenadarkwa/PersonalWebsite"
                        className="underline "
                    >
                        github.com/kwabenadarkwa/PersonalWebsite
                    </a>
                </div>
            </div>
        </footer>
    );
}
