import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full flex justify-center bg-bg overflow-scroll">
      <main className="w-full max-w-[655px] ">{children}</main>
    </div>
  );
}
