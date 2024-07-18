import prisma from '@/lib/prisma';

export async function POST(req: Request) {
  try {
    const { task } = await req.json();

    const result = await prisma.task.create({
      data: { task },
    });

    return Response.json({ data: result }, { status: 201 });
  } catch (error) {
    return Response.json({ error: 'Unable to create task!' }, { status: 500 });
  }
}

export async function GET(req: Request) {
  const url = new URL(req.url);
  const searchQuery = url.searchParams.get('search') || '';

  try {
    const tasks = await prisma.task.findMany({
      where: {
        task: {
          contains: searchQuery,
          mode: 'insensitive',
        },
      },
      orderBy: { id: 'desc' },
    });

    return Response.json({ data: tasks }, { status: 200 });
  } catch (error) {
    return Response.json({ error: 'Unable to fetch task!' }, { status: 500 });
  }
}

export async function DELETE(req: Request) {
  try {
    const { id } = await req.json();

    await prisma.task.delete({
      where: { id: String(id) },
    });

    return Response.json(
      { message: 'Task deleted successfully!' },
      { status: 200 },
    );
  } catch (error) {
    return Response.json({ error: 'Unable to delete task!' }, { status: 500 });
  }
}
