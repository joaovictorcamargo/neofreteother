import { Request, response, Response } from "express";
import { prisma } from "../../../../database/prismaClient";

export class UpdateCarryingController {
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
    console.log(request.params);
    const updateCarrying = await prisma.carrying.update({
      where: {
        id: request.params.id,
      },

      data: {
        typeOfPerson: typeOfPerson,
        cnpj: cnpj,
        stateRegistration: stateRegistration,
        socialReason: socialReason,
        fantasyName: fantasyName,
        cep: cep,
        street: street,
        number: number,
        neighborhood: neighborhood,
        city: city,
        state: state,
        email: email,
        phone: phone,
        Observation: Observation,
      },
    });
    return response.json(updateCarrying);
  }
}
