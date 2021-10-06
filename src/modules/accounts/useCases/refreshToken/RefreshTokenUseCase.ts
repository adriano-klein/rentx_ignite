import { sign, verify } from "jsonwebtoken";
import { inject, injectable } from "tsyringe";

import auth from "@config/auth";
import { IUserTokensRepository } from "@modules/accounts/repositories/IUserTokensRepository";
import { IDateProvider } from "@shared/infra/container/providers/dateProvider/IDateProvider";
import { AppError } from "@shared/infra/errors/AppError";

interface IPayload {
  sub: string;
  email: string;
}
@injectable()
class RefreshTokenUseCase {
  constructor(
    @inject("UsersTokensRepository")
    private usersTokensRepository: IUserTokensRepository,
    @inject("DayJsDateProvider")
    private dateProvider: IDateProvider
  ) {}
  async execute(token: string): Promise<string> {
    const { email, sub } = verify(token, auth.secret_refresh_token) as IPayload;

    const user_id = sub;

    const userToken = await this.usersTokensRepository.findByUserIdAndRefreshToken(
      user_id,
      token
    );

    if (!userToken) {
      throw new AppError("Refresh Token does not exists");
    }

    await this.usersTokensRepository.deleteById(userToken.id);

    const refresh_token = sign({ email }, auth.secret_refresh_token, {
      subject: sub,
      expiresIn: auth.expires_in_refresh_token,
    });

    const expires_date = this.dateProvider.addDays(
      auth.expires_refresh_token_days
    );

    await this.usersTokensRepository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    return refresh_token;
  }
}

export { RefreshTokenUseCase };
