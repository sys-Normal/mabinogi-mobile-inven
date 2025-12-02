import { PrismaClient } from "@prisma/client/extension";

const prisma = new PrismaClient();

export async function GET(
  req: Request,
  { params }: { params: { userId: string } }
) {
  const userId = Number(params.userId);

  const user = await prisma.user.findUnique({
    where: { id: userId },
    include: { characters: true },
  });

  return Response.json(user);
}
