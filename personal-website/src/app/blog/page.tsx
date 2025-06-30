import { retrieveBlogAllBlogs } from '@/app/_utils/blogDetails';
import BlogPane from '@/app/_components/blogPane';

export default function Blog() {
  const { blogs, numberOfBlogs } = retrieveBlogAllBlogs();
  return (
    <div className="font-main flex flex-col gap-10">
      <div>{numberOfBlogs} blog posts published</div>

      <div>
        {blogs.map((blog, index) => {
          return (
            <BlogPane
              title={blog.title}
              tags={blog.tags}
              date={blog.date}
              key={index}
            />
          );
        })}
      </div>
    </div>
  );
}
