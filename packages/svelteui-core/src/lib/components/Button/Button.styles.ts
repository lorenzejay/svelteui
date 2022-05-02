import type {
	SvelteuiColor,
	SvelteuiSize,
	SvelteuiNumberSize,
	SvelteuiGradient,
	DefaultProps
} from '$lib/styles';
import type { LoaderPropsExtended } from '../Loader/Loader.styles';

export interface ButtonProps extends DefaultProps {
	variant: ButtonVariant;
	color: SvelteuiColor;
	size: SvelteuiNumberSize;
	radius: SvelteuiNumberSize | number;
	gradient: SvelteuiGradient;
	loaderPosition: 'left' | 'right';
	loaderProps: LoaderProps;
	className: string;
	href: string;
	external: boolean;
	disabled: boolean;
	compact: boolean;
	loading: boolean;
	uppercase: boolean;
	fullSize: boolean;
	ripple: boolean;
}

export type ButtonVariant =
	| 'filled'
	| 'light'
	| 'outline'
	| 'default'
	| 'white'
	| 'gradient'
	| 'subtle';

export interface ButtonStylesProps {
	color: SvelteuiColor;
	size: SvelteuiSize;
	radius: SvelteuiNumberSize;
	fullWidth: boolean;
	compact: boolean;
	gradientFrom: string;
	gradientTo: string;
	gradientDeg: number;
}

export interface GetVariantStyles {
	color: SvelteuiColor;
	variant: ButtonVariant;
	gradient?: { from: SvelteuiColor; to: SvelteuiColor; deg: number };
}

export interface LoaderProps {
	variant: LoaderPropsExtended['variant'];
	color: LoaderPropsExtended['color'];
	size: LoaderPropsExtended['size'];
}

export const sizes = {
	xs: {
		height: 30,
		padding: '0px 14px'
	},
	sm: {
		height: 36,
		padding: '0px 18px'
	},
	md: {
		height: 42,
		padding: '0px 22px'
	},
	lg: {
		height: 50,
		padding: '0px 26px'
	},
	xl: {
		height: 60,
		padding: '0px 32px'
	},
	'compact-xs': {
		height: 22,
		padding: '0 7px'
	},

	'compact-sm': {
		height: 26,
		padding: '0 8px'
	},

	'compact-md': {
		height: 30,
		padding: '0 10px'
	},

	'compact-lg': {
		height: 34,
		padding: '0 12px'
	},

	'compact-xl': {
		height: 40,
		padding: '0 14px'
	}
};
