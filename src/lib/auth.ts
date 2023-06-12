import { AuthOptions, DefaultUser } from "next-auth";
import { OAuthConfig } from "next-auth/providers";

export type TzAuthAccount = {
  sub: string; // it is essential to always return a sub claim
  balance: number;
  tokens: string[];
  nickname?: string;
  profile?: string;
  discord?: string;
  twitter?: string;
  github?: string;
  dns?: string;
};

export interface User extends DefaultUser {
  balance: number;
  nickname?: string;
  profile?: string;
  discord?: string;
  twitter?: string;
  github?: string;
  dns?: string;
}

export const TzAuthProvider: OAuthConfig<TzAuthAccount> = {
  id: "tzauth",
  name: "TzAuth",
  type: "oauth",
  wellKnown: "https://tzauth.com/.well-known/openid-configuration",
  authorization: { params: { scope: "openid profile tokens balance" } },
  checks: ["pkce", "state", "nonce"],
  clientId: "test_client_server",
  clientSecret: "not_so_secret-client_secret",
  idToken: true,
  async profile(profile, tokens): Promise<User> {
    console.log("profile callback", { profile, tokens });
    return {
      id: profile.sub,
      name: profile.nickname || "",
      balance: profile.balance,
      profile: profile.profile,
      discord: profile.discord,
      twitter: profile.twitter,
      github: profile.github,
      dns: profile.dns,
    };
  },
};

export const authOptions: AuthOptions = {
  debug: false,
  callbacks: {
    async session({ session, user, token }) {
      console.log({ session, user, token });
      return session;
    },
  },
  providers: [
    // TzAuth configuration
    TzAuthProvider,
  ],
  /*
  pages: {
    signIn: "/auth/signin",
    signOut: "/auth/signout",
    error: "/auth/error", // Error code passed in query string as ?error=
  },
  */
};
