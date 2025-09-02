import Image from 'next/image';

export default function Home() {
    return (
        <>
            {/* Animated Background */}
            <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
                <div className="absolute inset-0 bg-gradient-to-br from-[#171717] via-[#262626] to-[#171717]" />

                {/* Floating particles/dots */}
                <div
                    className="absolute top-1/4 left-1/4 w-2 h-2 bg-[#22C55E] rounded-full opacity-60 animate-ping"
                    style={{ animationDelay: '0s' }}
                />
                <div
                    className="absolute top-1/3 right-1/4 w-1.5 h-1.5 bg-[#facc15] rounded-full opacity-40 animate-ping"
                    style={{ animationDelay: '1s' }}
                />
                <div
                    className="absolute bottom-1/3 left-1/3 w-1 h-1 bg-[#22C55E] rounded-full opacity-50 animate-ping"
                    style={{ animationDelay: '2s' }}
                />
                <div
                    className="absolute top-3/4 right-1/3 w-2 h-2 bg-[#facc15] rounded-full opacity-30 animate-ping"
                    style={{ animationDelay: '1.5s' }}
                />
                <div
                    className="absolute bottom-1/4 left-1/2 w-1.5 h-1.5 bg-[#22C55E] rounded-full opacity-45 animate-ping"
                    style={{ animationDelay: '0.5s' }}
                />

                {/* Subtle grid pattern */}
                <div
                    className="absolute inset-0 opacity-5"
                    style={{
                        backgroundImage:
                            'radial-gradient(circle, #22C55E 1px, transparent 1px)',
                        backgroundSize: '50px 50px',
                    }}
                />
            </div>

            {/* Main Content */}
            <div className="relative min-h-screen flex items-center justify-center p-4 z-10">
                <div className="font-main max-w-2xl mx-auto text-center space-y-8">
                    {/* Welcome Badge */}
                    <div className="flex justify-center">
                        <div className="text-[#22C55E] inline-block border border-[#22C55E] rounded-full px-4 py-2 bg-[#26342A] backdrop-blur-sm">
                            😊いらっしゃいませ!
                        </div>
                    </div>

                    {/* Welcome Text */}
                    <div className="text-white/90 text-lg leading-relaxed">
                        If you&apos;re wondering what that means, it&apos;s just Japanese
                        for <span className="text-[#22C55E] font-semibold">Welcome</span> as
                        I&apos;m sure you would have guessed.😉
                    </div>

                    {/* Luffy Quote & Image */}
                    <div className="space-y-6">
                        <div className="text-[#facc15] text-2xl font-bold">
                            I&apos;m going to be the King of the Pirates!
                        </div>

                        <div className="flex justify-center">
                            <Image
                                src="/luffy.png"
                                width={100}
                                height={100}
                                alt="site logo"
                                className="rounded-full border-2 border-[#facc15]/30 shadow-lg"
                            />
                        </div>
                    </div>

                    {/* Bio Text */}
                    <div className="text-white/80 text-lg leading-relaxed max-w-lg mx-auto">
                        By ☝️I mean, I am a life long learner. I approach every problem with
                        a wide eyed curiosity and desire to learn and have fun.
                        <br />
                        <br />
                        <span className="text-[#22C55E] font-medium">
                            Enjoy my thoughts.
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}
