// pages/posts/[id].js

import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { remark } from 'remark';
import html from 'remark-html';

const postsDirectory = path.join(process.cwd(), 'blogposts');

export async function getStaticPaths() {
  const fileNames = fs.readdirSync(postsDirectory);
  const paths = fileNames.map((fileName) => ({
    params: { id: fileName.replace(/\.md$/, '') },
  }));
  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const fullPath = path.join(postsDirectory, `${params.id}.md`);
  const fileContents = fs.readFileSync(fullPath, 'utf8');
  const matterResult = matter(fileContents);

  const processedContent = await remark().use(html).process(matterResult.content);
  const contentHtml = processedContent.toString();

  return {
    props: {
      id: params.id,
      title: matterResult.data.title,
      date: matterResult.data.date,
      contentHtml,
    },
  };
}

export default function Post({ id, title, date, contentHtml }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>{date}</p>
      <div dangerouslySetInnerHTML={{ __html: contentHtml }} />
    </div>
  );
}
