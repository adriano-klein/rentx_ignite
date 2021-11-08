import { container } from "tsyringe";

import { IDateProvider } from "./dateProvider/IDateProvider";
import { DayJsDateProvider } from "./dateProvider/implementations/DayJsDateProvider";
import { IMailProvider } from "./MailProvider/IMailProvider";
import { EtherealMailProvider } from "./MailProvider/implementations/EtherealMailProvider";

container.registerSingleton<IDateProvider>(
  "DayJsDateProvider",
  DayJsDateProvider
);

container.registerInstance<IMailProvider>(
  "EtherealMailProvider",
  new EtherealMailProvider()
);
