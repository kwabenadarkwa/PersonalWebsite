import Image from 'next/image';
export default function Home() {
  return (
    <div className="font-main">
      <div className="text-[#22C55E] inline border border-[#22C55E] rounded-full p-1 bg-[#26342A]">
        😊いらっしゃいませ!
      </div>
      {/*TODO: add some typewriter text to explain the japanese here */}
      <div className="pt-4">
        If you&apos;re wondering what that means, it&apos;s just Japanese for{' '}
        {''}
        <span className="text-[#22C55E]">Welcome</span> as I&apos;m sure you
        would have guessed.😉
        <br />
        <br />
        <br />
        {''}
        <div className="text-[#facc15] text-xl justify-self-center">
          I&apos;m going to be the King of the Pirates!
        </div>
        <Image
          src="/luffy.png"
          width={75}
          height={75}
          alt="site logo"
          className="rounded-full justify-self-center"
        />
        <div className="pt-4 ">
          By ☝️I mean, I am a life long learner. I approach every problem with a
          wide eyed curiousity and desire to learn and have fun!.
          <br />
          Enjoy my thoughts!
        </div>
      </div>
    </div>
  );
}
