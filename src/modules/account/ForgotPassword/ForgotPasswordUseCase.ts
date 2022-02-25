import { compare } from "bcrypt";
import express, { request, response } from "express";
import { sign } from "jsonwebtoken";
import { getRepository } from "typeorm";
import { prisma } from "../../../database/prismaClient";
const crypto = require("crypto");
import * as nodemailer from "nodemailer";
import * as bcrypt from "bcrypt";
const router = express.Router();

interface IForgotPassword {
  username: string;
}

export class ForgotPasswordUseCase {
  async execute({ username }: IForgotPassword) {
    const client = await prisma.client.findFirst({
      where: {
        username,
      },
    });

    const transport = nodemailer.createTransport({
      host: "smtp.mailtrap.io",
      port: 2525,
      auth: {
        user: "f872e453c1f108",
        pass: "60d4014800fe5a",
      },
    });

    const newPassword = crypto.randomBytes(4).toString("hex");

    transport
      .sendMail({
        from: "Administrador: <01e970425d-d85a9a+1@inbox.mailtrap.io>",
        to: username,
        subject: "Recuperar senha",
        html: `<p>Olá sua nova senha para acessar o sitema é: ${newPassword}</p><br/><a href="http://localhost:3000/login>Sistema</a>`,
      })
      .then(() => {
        bcrypt.hash(newPassword, 8).then(async (password) => {
          /*  getRepository(username)
            .update(username[0], {
              password,
            }) */
          const user = await prisma.client
            .update({
              where: { username },
              data: { password },
            })

            .then(() => {
              return response.status(200).json({ message: "Email sended" });
            })
            .catch(() => {
              return response.status(404).json({ message: "User not founded" });
            });
        });
      });
  }
  catch() {
    throw new Error("Username or password invalid!");
  }
}
