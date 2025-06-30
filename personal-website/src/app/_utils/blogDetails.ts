import { join } from 'path';
import fs from 'fs';
import matter from 'gray-matter';

export function retrieveBlogAllBlogs(): BlogDetails {
  const directoryPath = join(process.cwd(), 'src', 'content');

  try {
    const blogFiles = fs.readdirSync(directoryPath);

    const mdxFiles = blogFiles.filter(
      (file) => file.endsWith('.md') || file.endsWith('.mdx'),
    );

    const blogs: BlogPaneProps[] = [];

    for (const file of mdxFiles) {
      try {
        const filePath = join(directoryPath, file);
        const fileContent = fs.readFileSync(filePath, 'utf-8');

        const { data } = matter(fileContent);

        if (data.published === false) continue;

        const blog: BlogPaneProps = {
          title: data.title || file.replace(/\.mdx?$/, ''),
          tags: Array.isArray(data.tags)
            ? data.tags
            : data.tags
              ? [data.tags]
              : [],
          date: data.date || new Date().toISOString().split('T')[0], //Dates should look like "2023-01-01"
          filename: file.replace(/\.mdx?$/, ''),
        };

        blogs.push(blog);
      } catch (fileError) {
        console.warn(`Error processing file ${file}:`, fileError);
      }
    }

    blogs.sort(
      (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime(),
    );

    return {
      blogs,
      numberOfBlogs: blogs.length,
    };
  } catch (error) {
    console.error('Error reading blog directory:', error);
    return {
      blogs: [],
      numberOfBlogs: 0,
    };
  }
}

export interface BlogPaneProps {
  title: string;
  tags: string[];
  date: string;
  filename: string;
}
interface BlogDetails {
  blogs: BlogPaneProps[];
  numberOfBlogs: number;
}
