/**
 * External dependencies
 */
import {
	FC,
	ButtonHTMLAttributes,
	ReactElement,
	AnchorHTMLAttributes,
} from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import Link from 'next/link';
import classes from './Button.module.scss';

export type BaseButtonProps = {
	children?: string | ReactElement;
	size?: 'large' | 'medium' | 'small';
	type?: 'primary' | 'alert';
};

type RealButtonProps = Omit<ButtonHTMLAttributes<HTMLButtonElement>, 'type'>;

type AnchorButtonProps = {
	href: string;
} & Omit<AnchorHTMLAttributes<HTMLAnchorElement>, 'href'>;

export type ButtonProps = BaseButtonProps &
	(RealButtonProps | AnchorButtonProps);

const AnchorButton: FC<AnchorButtonProps> = ({ href, children, ...props }) => (
	<Link href={href}>
		<a href={href} {...props}>
			{children}
		</a>
	</Link>
);

const RealButton: FC<RealButtonProps> = ({ ...props }) => <button {...props} />;

const hasAnchorProps = (props: any): props is AnchorButtonProps => !!props.href;
const hasButtonProps = (props: any): props is RealButtonProps => !props.href;

/**
 * Button component
 */
const Button: FC<ButtonProps> = ({
	children,
	className: baseClassName,
	size = 'medium',
	type = 'primary',
	...props
}) => {
	const className = classnames(
		baseClassName,
		classes.button,
		classes[type],
		classes[size]
	);

	return hasAnchorProps(props) ? (
		<AnchorButton {...props} className={className}>
			{children}
		</AnchorButton>
	) : hasButtonProps(props) ? (
		<RealButton {...props} className={className}>
			{children}
		</RealButton>
	) : null;
};
export default Button;
