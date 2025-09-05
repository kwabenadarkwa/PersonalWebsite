import Project from '../_components/projects';
import ExtractProjectJsonData from '../_utils/extractProjectJsonData';
import ProjectSection from '../_components/projectSection';
import ComingSoon from '../_components/comingSoon';

export default async function Projects() {
    const ProjectData = await ExtractProjectJsonData();

    return (
        <div>
            <div className="font-main font-bold ">
                <ProjectSection name="Open Source Tools" image="/rocket.svg" />

                {ProjectData.openSource.length > 0 ? (
                    ProjectData &&
                    ProjectData.openSource.map(
                        (
                            item: {
                                name: string;
                                description: string;
                                image: string;
                                link: string;
                                displaylink: string;
                            },
                            index: number
                        ) => (
                            <div key={index}>
                                <Project
                                    name={item.name}
                                    description={item.description}
                                    link={item.link}
                                    image={item.image}
                                    displaylink={item.displaylink}
                                />
                            </div>
                        )
                    )
                ) : (
                    <ComingSoon />
                )}
            </div>

            <div className="font-main font-bold py-4">
                <ProjectSection name="Apps" image="/coding.svg" />
                {ProjectData.apps.length > 0 ? (
                    ProjectData.apps.map(
                        (
                            item: {
                                name: string;
                                description: string;
                                image: string;
                                link: string;
                                displaylink: string;
                            },
                            index: number
                        ) => (
                            <div key={index}>
                                <Project
                                    name={item.name}
                                    description={item.description}
                                    link={item.link}
                                    image={item.image}
                                    displaylink={item.displaylink}
                                />
                            </div>
                        )
                    )
                ) : (
                    <ComingSoon />
                )}
            </div>

        </div>
    );
}
