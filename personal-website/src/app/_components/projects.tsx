import Image from 'next/image';

export interface ProjectProps {
  name: string;
  description: string;
  link: string;
  image: string;
  displaylink: string;
}

export default function Project({
  name,
  description,
  link,
  image,
  displaylink,
}: ProjectProps) {
  return (
    <div className="font-main py-1  border-b border-[#262626] pb-3">
      <div className="flex flex-row py-1 gap-3 text-sm  items-center">
        <div className="flex flex-row items-center gap-1.5 ">
          <div className=" g">{name} </div>
          <a
            href={link}
            className=" font-lugrasimo flex flex-row  border-[#525252] rounded-full p-0.5 bg-[#262626] gap-1 text-sm items-center text-[#A3A3A3]  "
          >
            <Image src={image} alt="" height={12} width={12} /> {displaylink}
          </a>
        </div>
      </div>

      <div className="text-sm text-[#A3A3A3]  ">{description}</div>
      <div></div>
    </div>
  );
}
