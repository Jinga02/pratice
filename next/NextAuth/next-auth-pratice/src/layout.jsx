import AuthProvider from "./lib/next-auth"; // 사용자 인증을 관리하는 AuthProvider 컴포넌트를 가져옵니다.

// RootLayout 함수 컴포넌트 정의
export default function RootLayout({ children }) {
  return (
    <html lang="kr">
      <body className={pretendard.className}>
        {/* AuthProvider 컴포넌트로 children을 감싸서 사용자 인증을 관리합니다. */}
        <AuthProvider>{children}</AuthProvider>
      </body>
    </html>
  );
}
