import prisma from '@/utils/db';

const prismaHandlers = async () => {
  // await prisma.task.create({
  //   data: {
  //     content: 'wake up',
  //   },
  // });
  console.log('prisma example');
  const allTasks = await prisma.task.findMany({
    orderBy: {
      createdAt: 'desc',
    },
  });
  return allTasks;
};

const PrismaExamplePage = async () => {
  const tasks = await prismaHandlers();
  if (tasks.length === 0) {
    return <h2>No tasks found</h2>
  }
  return (
    <div>
        <h1>Prisma Example Page</h1>
        {
          tasks.map((task) => {
            return <h2 key={task.id}>
              😬{task.content}
            </h2>
          })
        }
    </div>
  );
}

export default PrismaExamplePage;