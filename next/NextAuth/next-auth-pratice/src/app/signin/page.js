"use client";

import { signIn } from "next-auth/react";

export default function Login() {
  return (
    <>
      <h1>로그인 페이지</h1>
      <button className="" onClick={() => signIn("kakao")}>
        <img className="w-24 h-8" src="/kakao_login.png" alt="카카오 로그인" />
      </button>
    </>
  );
}
