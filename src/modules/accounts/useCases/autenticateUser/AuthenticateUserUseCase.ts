import { compare } from "bcryptjs";
import { sign } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { AppError } from "@shared/infra/errors/AppError";

interface IRequest {
  email: string;
  password: string;
}

interface IResponse {
  user: {
    name: string;
    email: string;
  };
  token: string;
}

@injectable()
class AuthenticateUserUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository
  ) {}

  async execute({ email, password }: IRequest): Promise<IResponse> {
    const user = await this.usersRepository.findByEmail(email);
    if (!user) {
      throw new AppError("Incorrect e-mail or password");
    }

    const passwordMatch = compare(password, user.password);
    if (!passwordMatch) {
      throw new AppError("Incorrect e-mail or password");
    }

    const token = sign({}, "12e0cdfaf3018be48af04449b889096c", {
      subject: user.id,
      expiresIn: "1d",
    });
    return { user, token };
  }
}

export { AuthenticateUserUseCase };
