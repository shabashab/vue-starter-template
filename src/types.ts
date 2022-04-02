import { ViteSSGContext } from "vite-ssg/single-page";

export type UserModule = (input: ViteSSGContext<true>) => void;