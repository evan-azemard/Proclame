export type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
	name: string;
    title: string;
	width?: string;
	color?: string;
	onClick?: () => void;
};