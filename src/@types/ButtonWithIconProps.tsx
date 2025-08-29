export type ButtonWithIconProps = {
  text?: string;
  icon?: React.ReactNode;
  onClick?: () => void;
  className?: string;
  type?: "button" | "submit" | "reset";
};
