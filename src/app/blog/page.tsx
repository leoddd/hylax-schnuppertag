import Link from "next/link";
import { fetchPosts } from "@/Blog";
import { decode } from "html-entities";

export default async function Blog() {
  const posts = await fetchPosts();

  let postList = posts.map(post =>
    <Link key="{post.id}" className="w-1/4" href={"/blog/" + post.slug}>
      <div className="rounded h-full overflow-hidden shadow-lg bg-slate-400/25 p-12 mx-2 flex items-center justify-center">
        {decode(post.title.rendered)}
      </div>
    </Link>
  );

  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-row flex-wrap gap-y-4 items-stretch">
        {postList}
      </section>
      <nav className="flex flex-row gap-10">
        <Link href="/">Home</Link>
      </nav>
    </main>
  );
}
