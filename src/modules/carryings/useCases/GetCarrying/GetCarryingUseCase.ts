import { prisma } from "../../../../database/prismaClient";

export class GetCarryingUseCase {
  async findAll() {
    const carrying = await prisma.carrying.findMany();
    return carrying;
  }
  async findOne(id: string) {
    const carrying = await prisma.carrying.findUnique({
      where: {
        id,
      },
    });
    return carrying;
  }
}
