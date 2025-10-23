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
      <div className="flex flex-col sm:flex-row sm:justify-between font-main text-sm border-b border-[#262626] py-2 gap-2">
        <div className="flex flex-col sm:flex-row sm:gap-4 gap-1">
          <div className="font-medium">{title}</div>
          <div className="flex flex-row gap-1.5 sm:gap-2 flex-wrap">
            {tags.map((tag, index) => {
              return (
                <div
                  key={index}
                  className="text-[#F8903C] bg-[#262626] rounded-full px-2 text-xs sm:text-sm"
                >
                  {tag}
                </div>
              );
            })}
          </div>
        </div>
        <div className="text-[#A3A3A3] text-xs sm:text-sm">{date}</div>
      </div>
    </Link>
  );
}
