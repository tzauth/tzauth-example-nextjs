"use client";

import { useSession } from "next-auth/react";

export const User = () => {
  const { data: session, status } = useSession();

  return (
    <>
      <h1>Client Session</h1>
      <p>{status}</p>
      <pre>{JSON.stringify(session)}</pre>
    </>
  );
};