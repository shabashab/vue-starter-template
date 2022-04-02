import { createHead } from "@vueuse/head";
import { UserModule } from "../types";

export const install: UserModule = ({ application }) => {
  const head = createHead();
  application.use(head);
};