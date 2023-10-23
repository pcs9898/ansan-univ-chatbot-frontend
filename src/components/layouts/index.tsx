import { ReactNode } from "react";
import MainLayout from "./main";

interface ILayoutsProps {
  children: ReactNode;
}

export default function Layouts({ children }: ILayoutsProps) {
  return (
    <>
      {/* //Header */}
      <MainLayout>{children}</MainLayout>
    </>
  );
}
