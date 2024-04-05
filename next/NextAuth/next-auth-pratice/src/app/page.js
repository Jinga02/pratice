import Link from "next/link";

export default function Home() {
  return (
    <main className="text-3xl font-semibold p-12">
      HOME
      <Link href={"/signin"}>로그인</Link>
    </main>
  );
}
