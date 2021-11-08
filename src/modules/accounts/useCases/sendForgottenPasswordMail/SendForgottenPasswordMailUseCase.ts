import { inject, injectable } from "tsyringe";
import { v4 as uuidV4 } from "uuid";

import { IUserRepository } from "@modules/accounts/repositories/IUserRepository";
import { IUserTokensRepository } from "@modules/accounts/repositories/IUserTokensRepository";
import { IDateProvider } from "@shared/infra/container/providers/dateProvider/IDateProvider";
import { IMailProvider } from "@shared/infra/container/providers/MailProvider/IMailProvider";
import { AppError } from "@shared/infra/errors/AppError";

@injectable()
class SendForgottenPasswordMailUseCase {
  constructor(
    @inject("UsersRepository")
    private usersRepository: IUserRepository,
    @inject("UsersTokensRepository")
    private userTokensRepository: IUserTokensRepository,
    @inject("DayJsDateProvider")
    private dateProvider: IDateProvider,
    @inject("EtherealMailProvider")
    private mailProvider: IMailProvider
  ) {}
  async execute(email: string) {
    const user = await this.usersRepository.findByEmail(email);

    if (!user) {
      throw new AppError("User not found");
    }

    const token = uuidV4();

    const expires_date = this.dateProvider.addHours(3);
    await this.userTokensRepository.create({
      refresh_token: token,
      user_id: user.id,
      expires_date,
    });

    await this.mailProvider.sendMail(
      email,
      "Recuperação de senha",
      `O link para reset é ${token}`
    );
  }
}

export { SendForgottenPasswordMailUseCase };
