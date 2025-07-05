import Image from "next/image"
import Link from "next/link"

interface ProjectProps{
    name: string,
    description: string,
    link: string
    image:string
    displaylink: string
    

}

export default function Project({name, description, link, image, displaylink}: ProjectProps
){
    return(
        <div className="font-main ">
            <div  className="flex flex-row py-1 gap-3 text-xs  py-4 items-center">
            <div className=" g">{name} </div>
            <a 
            href={link}
            className=" flex flex-row border border-[#525252] rounded-full p-1 bg-[#262626] gap-2  ">
                 <Image
                src={image}
                alt=""
                height={12}
                width={12}/>  {displaylink}
                
            </a> 
            </div> 

            <div className="text-sm text-[#A3A3A3] ">{description}</div>
            <div>
             
            </div>


        </div>

    );
}