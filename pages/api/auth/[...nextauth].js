import NextAuth from "next-auth";
import Providers from "next-auth/providers";
import { db } from "../../../firebase";
import env from "../../../../env"

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    Providers.Google({
      clientId: process.env.GOOGLE_CLIENT_ID,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET,
    }),
    // ...add more providers here
  ],
  adapter: FirebaseAdapter(db),
});
