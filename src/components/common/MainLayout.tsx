import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full h-full flex justify-center bg-bg">
      <main className="w-full max-w-[655px] bg-white">{children}</main>
    </div>
  );
}
