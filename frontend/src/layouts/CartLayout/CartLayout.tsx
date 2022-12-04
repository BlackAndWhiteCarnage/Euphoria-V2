/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

/**
 * Internal dependencies
 */
import { ItemPreview } from 'fragments';
import { Header, Box, Loader } from 'elements';
import { useStateContext, CartItemType } from 'contexts/CartContext';
import classes from './CartLayout.module.scss';

const CartLayout: FC<PropsWithChildren> = ({ children }) => {
	const { isLoading } = useUser();

	const { cart } = useStateContext();

	const isEmpty = cart.length > 0;

	return isLoading ? (
		<Loader />
	) : (
		<div className={classes.layout}>
			<Header
				text={isEmpty ? `Koszyk (${cart.length})` : 'Twój koszyk jest pusty'}
			/>
			<div className={classes.wrapper}>
				<div className={classes.cart}>
					<ul className={classes.cartItems}>
						{cart.map((props: CartItemType) => (
							<ItemPreview {...props} key={props.slug} />
						))}
					</ul>
				</div>
				{isEmpty && (
					<div className={classes.checkout}>
						<Box>
							<div className={classes.innerCheckout}>
								<div className={classes.checkoutSteps}>{children}</div>
							</div>
						</Box>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartLayout;
