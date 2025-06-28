// import Image from "next/image";
import Header from '@/app/_components/header';
import Footer from '@/app/_components/footer';

export default function Home() {
  return (
    <div className="flex flex-col items-center justify-center gap-[32px] py-[64px] px-[32px] sm:px-[64px] lg:px-[128px] xl:px-[256px] min-h-[calc(100vh-64px)] sm:min-h-[calc(100vh-96px)] lg:min-h-[calc(100vh-128px)] xl:min-h-[calc(100vh-192px)] bg-amber-50">
      <Header />
      <Footer />
    </div>
  );
}
