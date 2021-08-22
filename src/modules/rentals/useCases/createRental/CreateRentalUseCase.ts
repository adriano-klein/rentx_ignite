import { IRentalsRepository } from "@modules/rentals/repositories/IRentalsRepository";
import { AppError } from "@shared/infra/errors/AppError";

interface IRequest {
  car_id: string;
  user_id: string;
  expected_return_date: Date;
}

class CreateRentalUseCase {
  constructor(private rentalRepository: IRentalsRepository) {}
  async execute({
    user_id,
    car_id,
    expected_return_date,
  }: IRequest): Promise<void> {
    // Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo carro
    const carUnavailable = await this.rentalRepository.findOpenRentalByCar(
      car_id
    );

    if (carUnavailable) {
      throw new AppError("Car is not available");
    }

    // Não deve ser possível cadastrar um novo aluguel caso já exista um aberto para o mesmo usuário
    const rentalOpenToUser = await this.rentalRepository.findOpenRentalByUser(
      user_id
    );

    if (rentalOpenToUser) {
      throw new AppError("There is a open rental for this user");
    }
  }
}

export { CreateRentalUseCase };
