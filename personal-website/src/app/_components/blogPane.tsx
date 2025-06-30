import Link from 'next/link';
import { BlogPaneProps } from '@/app/_utils/blogDetails';

export default function BlogPane({
  title,
  tags,
  date,
  filename,
}: BlogPaneProps) {
  return (
    <Link href={`/blog/${filename}`}>
      <div className="flex flex-row justify-between font-main text-sm border-b border-[#262626] py-2">
        <div className="flex flex-row gap-4">
          <div>{title}</div>
          <div className="flex flex-row gap-2">
            {tags.map((tag, index) => {
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
        <div>{date}</div>
      </div>
    </Link>
  );
}
