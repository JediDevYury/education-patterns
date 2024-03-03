interface Post {
  title: string;
  id: number;
}

export default async function Page() {
  const res = await fetch('https://api.vercel.app/blog', {
    next: { revalidate: 10 },
  });
  const posts = (await res.json()) as Post[];
  return (
   <ul>
     {posts.map((post: Post) => {
       return <li key={post.id}>{post.title}</li>;
     })}
   </ul>
  );
}
