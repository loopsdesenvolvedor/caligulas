type TitleProps = {
  text: string;
  tag: "h1" | "h2" | "h3" | "h4" | "h5" | "h6";
  className?: string;
};

const Title = ({ text, tag, className }: TitleProps) => {
  const Tag = tag;
  return (
    <div className="flex items-center gap-2">
      <span className={className}></span>
      <Tag>{text}</Tag>
    </div>
  );
};

export default Title;
