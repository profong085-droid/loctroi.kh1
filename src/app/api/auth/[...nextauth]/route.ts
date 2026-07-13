import NextAuth from "next-auth";
import GoogleProvider from "next-auth/providers/google";

const handler = NextAuth({
  providers: [
    GoogleProvider({
      clientId: process.env.GOOGLE_CLIENT_ID || "",
      clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
    }),
  ],
  callbacks: {
    async session({ session, token, user }) {
      return session; // The session will contain user email, image, name
    },
  },
  secret: process.env.NEXTAUTH_SECRET || "fallback-secret-for-development",
});

export { handler as GET, handler as POST };
