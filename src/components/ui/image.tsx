import { cn } from "@/lib/utils";
import NextImage, { ImageProps } from "next/image";
const Image = ({ className, draggable, ...props }: ImageProps) => {
  return (
    <NextImage
      {...props}
      draggable={draggable || false}
      className={cn("select-none pointer-events-none", className)}
    />
  );
};

export default Image;
