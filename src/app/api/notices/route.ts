import { NextRequest, NextResponse } from "next/server";
import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export async function GET() {
  const notices = await prisma.notice.findMany({
    orderBy: { createAt: "desc" },
  });

  return NextResponse.json(notices);
}

export async function POST(req: NextRequest) {
  const body = await req.json();
  const { title, content } = body;

  if (!title || !content) {
    return new NextResponse("title, content가 필요합니다.", { status: 400 });
  }

  const notice = await prisma.notice.create({
    data: { title, content },
  });

  return NextResponse.json(notice, { status: 201 });
}
