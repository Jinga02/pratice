import NextAuth from "next-auth";
import KakaoProviders from "next-auth/providers/kakao";

export default NextAuth({
  providers: [
    KakaoProviders({
      clientId: process.env.KAKAO_REST_API_KEY,
      clientSecret: process.env.KAKAO_CLIENT_SECRET,
    }),
  ],
});
