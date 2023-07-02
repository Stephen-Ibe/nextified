import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

console.log({
  clientId: process.env.GOOGLE_ID,
  clientSecret: process.env.GOOGLE_SECRET,
});

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_ID ?? "",
      clientSecret: process.env.GOOGLE_SECRET ?? "",
    }),
  ],
  callbacks: {
    async signIn({ user, account, profile, email, credentials }) {
      console.log(user, account, profile, email, credentials);
      return true;
    },
    async session({ session, token, user }) {
      return session;
    },
  },
});

export { handler as GET, handler as POST };
