"use client";

import { getServerSession } from "next-auth";
import { signIn } from "next-auth/react";

export default async function Login({ session }) {
  // const session = await getServerSession(req, res, authOptions);
  // console.log(session);
  console.log(session);
  return (
    <>
      <h1>로그인 페이지</h1>
      <button className="" onClick={() => signIn("kakao")}>
        <img className="w-24 h-8" src="/kakao_login.png" alt="카카오 로그인" />
      </button>
    </>
  );
}
