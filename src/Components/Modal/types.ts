import { ReactNode } from "react";

export type ModalPropTypes = {
  children: ReactNode;
  borderColor?: "default" | "error" | "success";
};
