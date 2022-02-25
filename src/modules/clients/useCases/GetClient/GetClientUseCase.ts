import { prisma } from "../../../../database/prismaClient";

export class GetClientUseCase {
  async findAll() {
    const client = await prisma.client.findMany();
    return client;
  }
  async findOne(id: string) {
    const client = await prisma.client.findUnique({
      where: {
        id,
      },
    });
    return client;
  }
}
