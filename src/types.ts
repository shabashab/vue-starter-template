import { App } from "vue";

export interface UserModuleContext {
  application: App;
}

export type UserModule = (input: UserModuleContext) => void;