import { ReactNode } from "react";

export default function Main({ children }: { children: ReactNode }) {
  return (
    <main className="bg-vDarkGrayLightBg dark:bg-vDarkBlueBg mt-1 transition-colors ease-in-out duration-500 h-screen overflow-auto">
      {children}
    </main>
  );
}
