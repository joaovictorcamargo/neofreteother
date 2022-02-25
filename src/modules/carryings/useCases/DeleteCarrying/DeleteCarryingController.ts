import { Request, response, Response } from "express";
import { prisma } from "../../../../database/prismaClient";

export class DeleteCarryingController {
  async handle(request: Request, response: Response) {
    const {
      id,
      typeOfPerson,
      cnpj,
      stateRegistration,
      socialReason,
      fantasyName,
      cep,
      street,
      number,
      neighborhood,
      city,
      state,
      email,
      phone,
      Observation,
    } = request.body;
    console.log("delete =>", request.params);
    const deleteCarrying = await prisma.carrying.delete({
      where: {
        id: request.params.id,
      },
    });
    return response.json(deleteCarrying);
  }
}
