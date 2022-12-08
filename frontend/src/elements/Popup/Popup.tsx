/**
 * External dependencies
 */
import { FC, PropsWithChildren, useEffect } from 'react';
import { createPortal } from 'react-dom';
import classNames from 'classnames';

/**
 * Internal dependencies
 */
import classes from './Popup.module.scss';

export type PopupProps = PropsWithChildren<{
	close: () => void;
	isOpen?: boolean;
}>;

const Popup: FC<PopupProps> = ({ children, close, isOpen = false }) => {
	// @ts-ignore
	useEffect(() => {
		const rootElements = document
			.querySelector<HTMLElement>('#__next')
			?.querySelector<HTMLElement>('*');

		if (rootElements) {
			isOpen
				? (rootElements.style.filter = 'blur(10px)')
				: (rootElements.style.filter = 'none');
		}

		return () => rootElements && (rootElements.style.filter = 'none');
	}, [isOpen]);

	/* eslint-disable jsx-a11y/click-events-have-key-events */
	/* eslint-disable jsx-a11y/no-static-element-interactions */

	return (
		<>
			{createPortal(
				<div
					className={classNames(classes.popup, {
						[classes['is-visible']]: isOpen,
					})}
					onClick={({ target }) =>
						(target as HTMLElement).classList.contains(classes.popup) && close()
					}
				>
					<div className={classes.content}>{children}</div>
				</div>,
				document.body
			)}
		</>
	);
};

export default Popup;
