import { Request, Response } from "express";
import { ForgotPasswordUseCase } from "./ForgotPasswordUseCase";

export class ForgotClientController {
  async handle(request: Request, response: Response) {
    const { id, username, password } = request.body;

    const forgotPasswordUseCase = new ForgotPasswordUseCase();
    const result = await forgotPasswordUseCase.execute({
      username,
    });

    return response.json(result);
  }
}
