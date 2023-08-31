import NextImage from "next/image";
import {
  createElement,
  Fragment,
  type FunctionComponent,
  type ReactHTML,
} from "react";

interface RendererProps {
  type?: keyof ReactHTML | FunctionComponent;
  props?: { [key: string]: any };
  children?: (RendererProps | string)[];
}

const Renderer = ({ type = Fragment, props = {}, children }: RendererProps) => {
  if (type === "img" || props.src) {
    return (
      <NextImage
        src={props.src}
        alt={props.alt}
        width={0}
        height={0}
        className="max-w-none h-full w-auto"
        unoptimized
        priority
      />
    );
  }

  return createElement(
    type,
    props,
    children?.map((child, idx) =>
      typeof child === "object" && child !== null ? (
        <Renderer key={idx} {...child} />
      ) : (
        child
      )
    )
  );
};

export default Renderer;
