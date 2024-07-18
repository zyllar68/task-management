import prisma from '@/lib/prisma';

export async function POST(request: Request) {
  return Response.json({ data: 'result' }, { status: 200 });
}

export async function GET(request: Request) {
  const tasks = await prisma.Task.findMany();

  return Response.json({ data: tasks }, { status: 200 });
}
