import NextAuth from "next-auth";

declare module "next-auth" {
  /**
   * Returned by `useSession`, `getSession` and received as a prop on the `SessionProvider` React Context
   */
  interface Session {
    user: {
      /** The user's postal address. */
      balance: number;
      nickname?: string;
      profile?: string;
      discord?: string;
      twitter?: string;
      github?: string;
      dns?: string;
    };
  }
}
