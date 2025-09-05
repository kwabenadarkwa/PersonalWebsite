import Image from "next/image";

interface SectionProps{
    name:string
    image:string
}

export default function ProjectSection({name, image}: SectionProps){
    return(
    <div className="flex flex-row items-center gap-1.5 text-[#facc15] py-5">
       
        <Image
        src={image}
        alt=""
        height={12}
        width={12}
        />
        {name}

   
  </div>

)
}
