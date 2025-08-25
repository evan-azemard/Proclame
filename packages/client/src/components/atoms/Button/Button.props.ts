export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  isBack?: boolean;
  text?: string;
  to?: string;
}
