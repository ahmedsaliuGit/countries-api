import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return <main className="bg-vDarkGrayLightBg mt-1">{children}</main>;
}
