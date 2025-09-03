import { retrieveBlogAllBlogs } from '@/app/_utils/blogDetails';
import BlogPane from '@/app/_components/blogPane';

export default function Blog() {
  const { blogs, numberOfBlogs } = retrieveBlogAllBlogs();
  return (
    <div className="font-main flex flex-col gap-10">
      <div>
        <div>{numberOfBlogs} blog posts published</div>

        <div className="text-[#b2beb5] pt-4">
          I decided to make this place to harbor my thoughts and ideas. This is
          my means of reasoning about thoughts that I have. And hopefully coming
          to a consensus on things that I belive. This is heavily inspired by{' '}
          <a
            href="https://www.buildingasecondbrain.com/"
            className="text-[#18A34B]"
          >
            Buidling a Second Brain ~ Tiago Forte
          </a>{' '}
          . I decided to build this while reading his book.
        </div>
      </div>
      <div>
        {blogs.map((blog, index) => {
          return (
            <BlogPane
              title={blog.title}
              tags={blog.tags}
              date={blog.date}
              filename={blog.filename}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
