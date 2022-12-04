/**
 * External dependencies
 */
import { FC, PropsWithChildren, ReactElement } from 'react';
import { useUser } from '@auth0/nextjs-auth0';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { Header, Box, Loader, Steps } from 'elements';
import { ItemPreview } from 'fragments';
import { ReactComponent as CardIcon } from 'images/icons/card.svg';
import { ReactComponent as CartIcon } from 'images/icons/cart.svg';
import { ReactComponent as TruckIcon } from 'images/icons/truck.svg';
import { useStateContext, CartItemType } from 'contexts/CartContext';
import classes from './CartLayout.module.scss';

type CartLayoutProps = PropsWithChildren<{
	step?: string;
	logIn?: ReactElement;
}>;

const CartLayout: FC<CartLayoutProps> = ({ step, children, logIn }) => {
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
								<div
									className={classnames(classes.checkoutSteps, {
										[classes['with-login']]: logIn,
									})}
								>
									{step && (
										<Steps
											activeStep={step}
											steps={[
												{
													icon: <CartIcon />,
													name: 'Podsumowanie',
												},
												{
													icon: <TruckIcon />,
													name: 'Dostawa',
												},
												{
													icon: <CardIcon />,
													name: 'Płatność',
												},
											]}
										/>
									)}
									{logIn}
									{children}
								</div>
							</div>
						</Box>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartLayout;
