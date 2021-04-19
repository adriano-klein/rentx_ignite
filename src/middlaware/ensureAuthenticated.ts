import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import { AppError } from "../errors/AppError";
import { UserRepository } from "../modules/accounts/repositories/implementations/UserRepository";

interface IPayload {
  sub: string;
}

export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Pega o token que é passado no authorization do header
  const authHeader = request.headers.authorization;

  // checa se existe um token no header e se mão existir retorna token is missing
  if (!authHeader) {
    throw new AppError("Token is missing", 401);
  }

  // desestruturação do split pegando somente o token do bearer token
  const [, token] = authHeader.split(" ");

  try {
    // Verifica se o token é válido e caso não seja retorna invalid token
    const { sub: user_id } = verify(
      token,
      "12e0cdfaf3018be48af04449b889096c"
    ) as IPayload;

    // Chamamos o UserRepository para checar se o id do usuário existe
    const userRepository = new UserRepository();
    const user = userRepository.findById(user_id);

    // Caso o id não exista retorna o erro User does not exists
    if (!user) {
      throw new AppError("User does not exists", 401);
    }
    request.user = {
      id: user_id,
    };
    next();
  } catch {
    throw new AppError("Invalid token", 401);
  }
}
