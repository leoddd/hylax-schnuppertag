import Link from "next/link";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <nav className="flex flex-row gap-10">
        <Link href="/about">About</Link>
        <Link href="/blog">Blog</Link>
      </nav>
    </main>
  );
}
