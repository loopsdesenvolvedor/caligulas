import { ElementType } from "react";

type TitleProps = {
  title: string;
  tag?: ElementType;
  className?: string;
};

const Title = ({ title, className, tag: Tag = "h1" }: TitleProps) => {
  return <Tag className={className}>{title}</Tag>;
};

export default Title;
