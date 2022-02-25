import { Request, Response } from "express";
import { prisma } from "../../../../database/prismaClient";
import { GetClientUseCase } from "./GetClientUseCase";

export class GetClientController {
  async findAll(request: Request, response: Response) {
    const getClientUseCase = new GetClientUseCase();
    const result = await getClientUseCase.findAll();
    return response.json(result);
  }
  async findOne(request: Request, response: Response) {
    const { id } = request.params;
    const getClientUseCase = new GetClientUseCase();
    const result = await getClientUseCase.findOne(id);
    return response.json(result);
  }
}
