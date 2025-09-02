'use client';
import Giscus from '@giscus/react';
interface BlogPostProps {
  Post: React.ComponentType;
  frontmatter: {
    title: string;
    date: string;
    tags: string[];
  };
}

export default function BlogPost({ Post, frontmatter }: BlogPostProps) {
  return (
        <div className="font-main">
            <div className="flex flex-col gap-2 text-left pb-10">
                <div className="text-2xl font-bold">{frontmatter.title}</div>

                <div className="flex flex-row gap-2 text-sm">
                    <div className="text-[#A3A3A3] bg-[#262626] border border-[#000000] rounded-full">
                        {frontmatter.date}
                    </div>
                    <div className="flex flex-row gap-2">
                        {frontmatter.tags.map((tag: string, index: number) => {
                            return (
                                <div
                                    key={index}
                                    className="text-[#F8903C] bg-[#262626] border border-[#000000] rounded-full pr-1 text-sm"
                                >
                                    {tag}
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>
            <article className="prose prose-lg prose-invert max-w-none">
                <Post />
            </article>

            <Giscus
                id="comments"
                repo="giscus/giscus-component"
                repoId="MDEwOlJlcG9zaXRvcnkzOTEzMTMwMjA="
                category="Announcements"
                categoryId="DIC_kwDOF1L2fM4B-hVS"
                mapping="specific"
                term="Welcome to @giscus/react component!"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="light"
                lang="en"
                loading="lazy"
            />
        </div>
    );

}
