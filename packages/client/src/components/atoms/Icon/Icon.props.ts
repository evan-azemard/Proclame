export type IconProps = React.HTMLAttributes<HTMLSpanElement> & {
	name: string;
	title: string;
	width?: string;
	size?: string;
	color?: string;
	uri?: string;
	onClick?: (event: React.MouseEvent<HTMLSpanElement>) => void;
};