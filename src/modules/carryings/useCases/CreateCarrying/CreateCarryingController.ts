import { Request, Response } from "express";
import { CreateCarryingUseCase } from "./CreateCarryingUseCase";

export class CreateCarryingController {
  async handle(request: Request, response: Response) {
    const {
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
    const createCarryingUseCase = new CreateCarryingUseCase();

    const result = await createCarryingUseCase.execute({
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
    });

    return response.json(result);
  }
}
