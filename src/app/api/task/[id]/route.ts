import prisma from '@/lib/prisma';

export async function PUT(
  req: Request,
  { params }: { params: { id: string } },
) {
  try {
    const { task } = await req.json();

    const result = await prisma.task.update({
      where: { id: params.id },
      data: { task },
    });

    return Response.json({ data: result }, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Unable to update task!' }, { status: 500 });
  }
}
