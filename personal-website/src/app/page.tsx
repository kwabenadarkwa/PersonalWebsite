import Image from 'next/image';
import AnimatedBackground from './_components/animatedBackground';

export default function Home() {
    return (
        <div>
            <AnimatedBackground />
            <div className="relative h-fit overflow-hidden flex items-center justify-center z-10">
                <div className="font-main max-w-2xl mx-auto text-center space-y-8">
                    <div className="flex justify-center">
                        <div className="text-[#22C55E] inline-block border border-[#22C55E] rounded-full px-4 py-2 bg-[#26342A] backdrop-blur-sm">
                            😊いらっしゃいませ!
                        </div>
                    </div>

                    <div className="text-white/90 text-lg leading-relaxed">
                        If you&apos;re wondering what that means, it&apos;s just Japanese
                        for <span className="text-[#22C55E] font-semibold">Welcome</span> as
                        I&apos;m sure you would have guessed.😉
                    </div>

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
        </div>
    );
}
