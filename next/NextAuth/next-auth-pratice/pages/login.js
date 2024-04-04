import { signIn, signOut, useSession } from "next-auth/react";

export default function Home() {
  const { data: session } = useSession();
  if (session) {
    return (
      <>
        {session.user?.name}님 반값습니다 <br />
        <button onClick={() => signOut()}>로그아웃</button>
      </>
    );
  }
  return (
    <>
      로그인되지 않았습니다. <br />
      <button onClick={() => signIn("kakao")}>로그인</button>
    </>
  );
}
