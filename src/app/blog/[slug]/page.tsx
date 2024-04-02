import Link from "next/link";
import { fetchPosts } from "@/Blog";
import moment from "moment";

export default async function BlogDetail({params}: {params: {slug: string}}) {
  const posts = await fetchPosts();

  let currentPost = posts.find(post => post.slug === params.slug);
  let renderedPost = <span>Post could not be found. :(</span>
  if (currentPost !== undefined) {
    renderedPost = <div className="rounded overflow-hidden shadow-lg bg-slate-400/25 p-12">
      <div className="flex flex-row">
        <h1>
          {currentPost.title.rendered}
        </h1>
        <div className="grow"></div>
        <div>
          {moment(currentPost.date).format("DD.MM.yyyy")}
        </div>
      </div>
      <div className="mt-10" dangerouslySetInnerHTML={{"__html": currentPost.content.rendered}}></div>
    </div>;
  }


  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-row gap-10">
        {renderedPost}
      </section>
      <nav className="flex flex-row gap-10">
        <Link href="/blog">Back</Link>
        <Link href="/">Home</Link>
      </nav>
    </main>
  );
}
