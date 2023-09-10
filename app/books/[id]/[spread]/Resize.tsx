"use client";

import { useEffect } from "react";

interface Props {
  width: number;
  height: number;
  writingMode: string;
}

const Resize = ({ width, height, writingMode }: Props) => {
  useEffect(() => {
    document.body.style.setProperty("--page-width", `${width}`);
  }, [width]);

  useEffect(() => {
    document.body.style.setProperty("--page-height", `${height}`);
  }, [height]);

  useEffect(() => {
    document.body.style.setProperty("--writing-mode", writingMode);
  }, [writingMode]);

  return <></>;
};

export default Resize;
