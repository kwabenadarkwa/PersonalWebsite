'use client';
import Giscus from '@giscus/react';
import { useEffect, useState } from 'react';
import Loading from '../../_components/loading';
export default function Page({
    params,
}: {
    params: Promise<{ slug: string }>;
}) {
    const [content, setContent] = useState<{
        Post: React.ComponentType;
        frontmatter: { title: string; date: string; tags: string[] };
    } | null>(null);

    useEffect(() => {
        params.then(async (resolvedParams) => {
            const { slug } = resolvedParams;
            const { default: Post, frontmatter } = await import(
                `@/content/${slug}.mdx`
            );
            setContent({ Post, frontmatter });
        });
    }, [params]);

    if (!content) return <Loading />;

    const { Post, frontmatter } = content;
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
                repo="kwabenadarkwa/PersonalWebsite"
                repoId="R_kgDOPDXy6Q"
                category="General"
                categoryId="DIC_kwDOJyyyf84CXo_2"
                mapping="pathname"
                term="Welcome to my Website"
                reactionsEnabled="1"
                emitMetadata="0"
                inputPosition="top"
                theme="dark"
                lang="en"
                loading="lazy"
            />
        </div>
    );
}
