// // NextAuth 및 KakaoProvider 가져오기
// import NextAuth from "next-auth";
// import KakaoProvider from "next-auth/providers/kakao";

// // NextAuth 설정 및 구성
// const handler = NextAuth({
//   // 인증 제공자 설정
//   providers: [
//     // 여기서는 KakaoProvider를 사용하여 카카오 로그인을 구현합니다.
//     KakaoProvider({
//       clientId: process.env.KAKAO_CLIENT_ID,
//       clientSecret: process.env.KAKAO_CLIENT_SECRET,
//     }),
//     // 다른 인증 제공자 추가 가능
//   ],

//   // 콜백 함수 설정
//   callbacks: {
//     // 리다이렉트 콜백 함수
//      redirect({ url, baseUrl }) {
//       console.log("redirect callback called");
//       return baseUrl;
//     },
//     // // JWT 생성 콜백 함수
//      jwt({ token, account, profile }) {
//       console.log("이제 jwt");
//       console.log(token);
//       console.log(account);
//       console.log(profile);
//       if (account) {
//         token.accessToken = account.access_token;
//         token.id = profile.id;
//       }
//       console.log("jwt 끝");
//       return token;
//     },
//     // 세션 생성 콜백 함수
//      session({ session, user, token }) {
//       console.log("이제 session");
//       console.log(session, user, token);
//       session.accessToken = token.accessToken;
//       session.user.id = token.id;
//       console.log("이제 session 끝");
//       return session;
//     },
//   },
// });

// export { handler as GET, handler as POST };

// NextAuth 및 KakaoProvider 가져오기
import NextAuth from "next-auth";
import KakaoProvider from "next-auth/providers/kakao";

// NextAuth 설정 및 구성
const handler = NextAuth({
  // 인증 제공자 설정
  providers: [
    KakaoProvider({
      clientId: process.env.KAKAO_CLIENT_ID,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],

  // 콜백 함수 설정
  callbacks: {
    // 리다이렉트 콜백 함수
    redirect({ url, baseUrl }) {
      console.log("redirect callback called");
      return baseUrl;
    },
    // // JWT 생성 콜백 함수
    jwt({ token, account, profile }) {
      console.log("redirect JWT called");
      return token;
    },
    // 세션 생성 콜백 함수
    session({ session, user, token }) {
      console.log("redirect session called");
      return session;
    },
  },
});

export { handler as GET, handler as POST };
