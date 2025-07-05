import Project from "../_components/projects";

export default function Projects() {
  return (
    <div>
      <div className="font-main font-bold ">
        <span>Startups</span>

        


      </div>
      <div className="font-main font-bold py-4">Projects
        <Project
        name="Github"
        description="I built a github clone and it allowed me to replicate the features of github"
        link="www.github/kwabenadarkwa"
        image="/github.svg"
        displaylink="app" />

      </div>
      <div className="font-main font-bold py-4">Packages</div>



      <p className="text-xl">This is the projects page</p>
    </div>
  );
}
