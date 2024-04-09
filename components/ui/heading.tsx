import * as React from "react";
import { cn } from "@/lib/utils";

export interface HeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement> {
  level: 1 | 2 | 3 | 4 | 5 | 6;
}

const Heading: React.FC<HeadingProps> = ({
  level,
  className,
  children,
  ...props
}) => {
  const Tag: any = `h${level}` as keyof JSX.IntrinsicElements;
  let textSizeClass = "";
  switch (level) {
    case 1:
      textSizeClass = "text-4xl"; // Large text for level 1
      break;
    case 2:
      textSizeClass = "text-3xl";
      break;
    case 3:
      textSizeClass = "text-2xl";
      break;
    case 4:
      textSizeClass = "text-xl";
      break;
    case 5:
      textSizeClass = "text-lg";
      break;
    case 6:
      textSizeClass = "text-base";
      break;
    default:
      textSizeClass = "text-4xl"
  }

  return (
    <Tag
      className={cn(textSizeClass, "font-bold", className)} // Combine dynamic textSizeClass with font-bold
      {...props}
    >
      {children}
    </Tag>
  );
};

export default Heading;
