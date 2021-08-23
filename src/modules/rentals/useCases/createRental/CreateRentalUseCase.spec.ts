import dayjs from "dayjs";

import { DayJsDateProvider } from "../../../../shared/infra/container/providers/dateProvider/implementations/DayJsDateProvider";
import { AppError } from "../../../../shared/infra/errors/AppError";
import { RentalsRepositoryInMemory } from "../../repositories/in-memory/RentalsRepositoryInMemory";
import { CreateRentalUseCase } from "./CreateRentalUseCase";

let createRentalUseCase: CreateRentalUseCase;
let rentalRepositoryInMemory: RentalsRepositoryInMemory;
let dayjsDateProvider: DayJsDateProvider;

describe("Create Rental", () => {
  const dayAdd24Hours = dayjs().add(1, "day").toDate();
  beforeEach(() => {
    rentalRepositoryInMemory = new RentalsRepositoryInMemory();
    dayjsDateProvider = new DayJsDateProvider();
    createRentalUseCase = new CreateRentalUseCase(
      rentalRepositoryInMemory,
      dayjsDateProvider
    );
  });

  it("Should be able to create a new rental", async () => {
    const rental = await createRentalUseCase.execute({
      user_id: "1234",
      car_id: "121212",
      expected_return_date: dayAdd24Hours,
    });

    expect(rental).toHaveProperty("id");
    expect(rental).toHaveProperty("start_date");
  });

  it("should not be able to create a new rental if an user have a open rental", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "1234",
        car_id: "121212",
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "1234",
        car_id: "121212",
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental if a car have a open rental", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "1234",
        car_id: "1111",
        expected_return_date: dayAdd24Hours,
      });

      await createRentalUseCase.execute({
        user_id: "4321",
        car_id: "1111",
        expected_return_date: dayAdd24Hours,
      });
    }).rejects.toBeInstanceOf(AppError);
  });

  it("should not be able to create a new rental with an invalid time", async () => {
    expect(async () => {
      await createRentalUseCase.execute({
        user_id: "1234",
        car_id: "1111",
        expected_return_date: dayjs().toDate(),
      });
    }).rejects.toBeInstanceOf(AppError);
  });
});
