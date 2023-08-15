import { type ReactNode } from "react";

interface ShelfRowProps {
  children?: ReactNode;
}

const ShelfRow = ({ children }: ShelfRowProps) => {
  return (
    <div className="bg-[#613F30] flex-[1_1_0] flex items-end min-h-[260px]">
      {children}
    </div>
  );
};

export default ShelfRow;
