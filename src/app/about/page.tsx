import Link from "next/link";

export default function About() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-between p-24">
      <section className="flex flex-row gap-10">
        Hello World.
      </section>
      <nav className="flex flex-row gap-10">
        <Link href="/">Home</Link>
      </nav>
    </main>
  );
}
