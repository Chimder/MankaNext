import { createOrCheackUser } from "@/shared/Api/generatedv2";
import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";
export const authOptions = {
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID!,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET!,
    }),
  ],
  callbacks: {
    async signIn({ user }: any) {
      const check = createOrCheackUser(user);
      return true;
    },
  },
};
export default NextAuth(authOptions);
