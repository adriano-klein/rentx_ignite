import { NextFunction, Request, Response } from "express";
import { verify } from "jsonwebtoken";

import auth from "@config/auth";
import { UsersTokensRepository } from "@modules/accounts/infra/typeorm/repositories/UsersTokensRepository";

import { UserRepository } from "../../../../modules/accounts/infra/typeorm/repositories/UserRepository";
import { AppError } from "../../errors/AppError";

interface IPayload {
  sub: string;
}

// eslint-disable-next-line @typescript-eslint/explicit-module-boundary-types
export async function ensureAuthenticated(
  request: Request,
  response: Response,
  next: NextFunction
) {
  // Pega o token que é passado no authorization do header
  const authHeader = request.headers.authorization;
  const usersTokensRepository = new UsersTokensRepository();

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
      auth.secret_refresh_token
    ) as IPayload;

    const user = await usersTokensRepository.findByUserIdAndRefreshToken(
      user_id,
      token
    );

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
