import NextAuth from "next-auth";
import Strava from "next-auth/providers/strava";
import { PrismaAdapter } from "@auth/prisma-adapter";
import { db } from "@/db";

export const { handlers, signIn, signOut, auth } = NextAuth({
  adapter: PrismaAdapter(db),
  providers: [Strava],
});
