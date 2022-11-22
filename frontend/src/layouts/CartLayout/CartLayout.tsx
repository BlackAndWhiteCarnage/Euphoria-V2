/**
 * External dependencies
 */
import { FC, PropsWithChildren, useEffect, useState } from 'react';

/**
 * Internal dependencies
 */
import { hasOnlyPhotoshoots, handleCheckout } from 'utils';
import { Header, Box } from 'elements';
import { ItemPreview, ShippingMethod, Summary, LogInInfo } from 'fragments';
import { useStateContext, CartItemType } from 'contexts/CartContext';
import classes from './CartLayout.module.scss';

const CartLayout: FC<PropsWithChildren> = () => {
	const [step, setStep] = useState(1);
	const [location, setLocation] = useState('');

	const { cart } = useStateContext();

	useEffect(() => {
		step === 3 && hasOnlyPhotoshoots(cart) && setStep(2);
	}, [cart, step]);

	const handleStepChange = () =>
		step !== 3
			? hasOnlyPhotoshoots(cart) && step === 2
				? handleCheckout(cart)
				: setStep(step + 1)
			: handleCheckout(cart);

	const isEmpty = cart.length > 0;

	return (
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
								<div className={classes.checkoutSteps}>
									{step === 1 && <LogInInfo onChange={handleStepChange} />}
									{step === 2 && (
										<Summary onChange={handleStepChange} cart={cart} />
									)}
									{step === 3 && (
										<ShippingMethod
											location={location}
											onChange={handleStepChange}
											onLocationSelect={(value: string) => setLocation(value)}
										/>
									)}
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
