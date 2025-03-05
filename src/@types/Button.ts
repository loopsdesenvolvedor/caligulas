export type ButtonType = "button" | "submit";

export interface ButtonProps {
  text: string;
  type: ButtonType;
  icon?: React.ReactNode;
  className?: "menu" | "favorite" | "user";
}
