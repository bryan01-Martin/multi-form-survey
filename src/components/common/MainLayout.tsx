import { PropsWithChildren } from "react";

export default function MainLayout({ children }: PropsWithChildren) {
  return (
    <div className="w-full min-h-full flex justify-center bg-bg overflow-scroll py-60">
      <main className="w-full max-w-[655px] relative">{children}</main>
    </div>
  );
}
