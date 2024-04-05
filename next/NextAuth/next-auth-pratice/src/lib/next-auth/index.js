"use client"; // 클라이언트 측에서 실행되는 코드임을 나타냅니다.
import React from "react"; // React 모듈을 가져옵니다.
import { SessionProvider } from "next-auth/react"; // next-auth/react에서 SessionProvider를 가져옵니다.

// AuthProvider 함수 컴포넌트 정의
export default function AuthProvider({ Component, pageProps }) {
  return (
    // 세션을 관리하기 위한 SessionProvider 컴포넌트 시작
    <SessionProvider session={pageProps.session}>
      {/* 현재 페이지의 Component와 pageProps를 포함하여 하위 컴포넌트로 전달 */}
      <Component {...pageProps} />
    </SessionProvider> // SessionProvider 컴포넌트 종료
  );
}
