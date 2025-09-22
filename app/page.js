import Link from "next/link";

export default function Home() {
  return (
    <main className="flex flex-col">
      <h1> CPRG 306: Web Development 2 - Assignments</h1>
      <br/>
      <Link href="./week-2">Week-2 CPRG306 Assignment</Link>
      <br/>
      <Link href="./week-3">Week-3 CPRG306 Assignment</Link>
    </main>
  );
}
