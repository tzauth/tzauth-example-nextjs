import { getServerSession } from "next-auth";
import { authOptions } from "@/lib/auth";
import { NextResponse } from "next/server";

export async function GET(req: any, res: any) {
  const session = await getServerSession(req, res, authOptions);

  return NextResponse.json({
    authenticated: !!session,
    session,
  });
}
