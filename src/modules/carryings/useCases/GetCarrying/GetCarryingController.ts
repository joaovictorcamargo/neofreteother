import { Request, Response } from "express";
import { prisma } from "../../../../database/prismaClient";
import { GetCarryingUseCase } from "./GetCarryingUseCase";

export class GetCarryingController {
  async findAll(request: Request, response: Response) {
    const getCarryingUseCase = new GetCarryingUseCase();
    const result = await getCarryingUseCase.findAll();
    return response.json(result);
  }
  async findOne(request: Request, response: Response) {
    const { id } = request.params;
    const getCarryingUseCase = new GetCarryingUseCase();
    const result = await getCarryingUseCase.findOne(id);
    return response.json(result);
  }
}
