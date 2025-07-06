import Project from "../_components/projects";
import ExtractProjectJsonData from "../_utils/extractProjectJsonData";
import ProjectSection from "../_components/projectSection";

// export async function  getStaticProps() {
//   const projectData = await ProjectsData()
  
//   return{
//     props: { projectData}
//   }
  
// }


export default async function Projects( ) {
  const ProjectData = await ExtractProjectJsonData()



  return (
    <div>
      <div className="font-main font-bold ">
        <ProjectSection
        name="Startups"
        image="/rocket.svg"
        
        
        />

        {ProjectData.startups.length > 0? (
         ProjectData && ProjectData.startups.map( (item: { name: string; description: string; image:string; link: string; displaylink: string; }, index:number ) => (
          <div key={index}> 
           <Project
            name={item.name}
            description= {item.description}
            link={item.link}
            image={item.image}
            displaylink={item.displaylink}
            />
            </div>

          ))

        ) : (
          <div className="text-sm"> My startups are still loading</div>
        )}
      </div>
      
      <div className="font-main font-bold py-4">

      <ProjectSection
        name="Apps"
        image="/coding.svg"
        
        
        />
      {ProjectData.apps.length > 0? (
          ProjectData.apps.map( (item: { name: string; description: string;image:string; link: string; displaylink: string; }, index:number ) => (
          <div key={index}>
            <Project
            name={item.name}
            description={item.description}
            link={item.link}
            image={item.image}
            displaylink={item.displaylink}
            />
            </div>

          ))

        ) : (
          <span> My apps are still loading</span>
        )}
      </div>
      
      <div className="font-main font-bold py-4">
      <ProjectSection
        name="Packages"
        image="/packages.svg"
        
        
        />
        {ProjectData.packages.length > 0? (
          ProjectData.packages.map( (item: { name: string; description: string; link: string; image: string; displaylink: string; }, index:number) => (
           <div key={index}>  <Project
            name={item.name}
            description={item.description}
            link={item.link}
            image={item.image}
            displaylink={item.displaylink}
            />
            </div>

          ))

        ) : (
          <span> My packages are still loading</span>
        )}
      </div>
    </div>
  );
}
