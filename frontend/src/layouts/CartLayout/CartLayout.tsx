/**
 * External dependencies
 */
import { FC, PropsWithChildren, useEffect, useState } from 'react';
import { useUser } from '@auth0/nextjs-auth0';

/**
 * Internal dependencies
 */
import {
	hasOnlyPhotoshoots,
	handleCheckout,
	checkIfProductsStillExist,
} from 'utils';
import {
	ItemPreview,
	ShippingMethod,
	Summary,
	LogInInfo,
	InfoPopup,
} from 'fragments';
import { Header, Box, Loader } from 'elements';
import { useIsFreeShipping, useGetProductsToDelete, usePopup } from 'hooks';
import { useStateContext, CartItemType } from 'contexts/CartContext';
import classes from './CartLayout.module.scss';

const CartLayout: FC<PropsWithChildren> = () => {
	const { user, isLoading } = useUser();
	const [step, setStep] = useState(user ? 2 : 1);

	const popup = usePopup();
	const isFreeShipping = useIsFreeShipping();
	const productsToDelete = useGetProductsToDelete();
	const { cart, filterCart, shippingLocation } = useStateContext();

	useEffect(() => {
		step === 3 && hasOnlyPhotoshoots(cart) && setStep(2);
		// hasOnlyPhotoshoots(cart) && setLocation(initialLocation);
	}, [cart, step]);

	useEffect(() => {
		user && setStep(2);
	}, [user]);

	const pay = () =>
		handleCheckout(cart, isFreeShipping, shippingLocation, productsToDelete);

	const handleStepChange = async () => {
		const check = await checkIfProductsStillExist(cart);

		step !== 3
			? hasOnlyPhotoshoots(cart) && step === 2
				? !check.includes('') && pay()
				: setStep(step + 1)
			: !check.includes('') && pay();

		if (check.includes('')) {
			popup.open();
			filterCart(check);
		}
	};

	const isEmpty = cart.length > 0;

	const steps = [
		<LogInInfo onChange={handleStepChange} />,
		<Summary cart={cart} onChange={handleStepChange} />,
		<ShippingMethod onChange={handleStepChange} />,
	];

	return (
		<>
			{isLoading ? (
				<Loader />
			) : (
				<div className={classes.layout}>
					<Header
						text={
							isEmpty ? `Koszyk (${cart.length})` : 'Twój koszyk jest pusty'
						}
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
										<div className={classes.checkoutSteps}>
											{steps[step - 1]}
										</div>
									</div>
								</Box>
							</div>
						)}
					</div>
				</div>
			)}
			{!isLoading && (
				<InfoPopup
					label="Niektóre produkty w Twoim koszyku były już niedostępne więc zostały usunięte."
					{...popup}
				/>
			)}
		</>
	);
};

export default CartLayout;
