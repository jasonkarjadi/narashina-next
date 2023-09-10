import type { ReactNode } from "react";

interface PaperProps {
  children?: ReactNode;
}

const Paper = async ({ children }: PaperProps) => {
  return (
    <div
      dir="ltr"
      className="bg-[#E0E2DC] w-[calc(var(--height-main)*var(--page-width)/var(--page-height))] relative [writing-mode:var(--writing-mode)]"
    >
      {children}
    </div>
  );
};

export default Paper;
