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
import { useIsFreeShipping, useGetProductsToDelete } from 'hooks';
import classes from './CartLayout.module.scss';

const initialLocation = {
	name: '',
	address: {
		line1: '',
		line2: '',
	},
};

const CartLayout: FC<PropsWithChildren> = () => {
	const [step, setStep] = useState(1);
	const [location, setLocation] = useState(initialLocation);

	const isFreeShipping = useIsFreeShipping();
	const productsToDelete = useGetProductsToDelete();
	const { cart } = useStateContext();

	useEffect(() => {
		step === 3 && hasOnlyPhotoshoots(cart) && setStep(2);
		hasOnlyPhotoshoots(cart) && setLocation(initialLocation);
	}, [cart, step]);

	const pay = () =>
		handleCheckout(cart, isFreeShipping, location, productsToDelete);

	const handleStepChange = () =>
		step !== 3
			? hasOnlyPhotoshoots(cart) && step === 2
				? pay()
				: setStep(step + 1)
			: pay();

	const isEmpty = cart.length > 0;

	const steps = [
		<LogInInfo onChange={handleStepChange} />,
		<Summary cart={cart} onChange={handleStepChange} />,
		<ShippingMethod
			location={location}
			onChange={handleStepChange}
			onLocationSelect={(value: any) => setLocation(value)}
		/>,
	];

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
								<div className={classes.checkoutSteps}>{steps[step - 1]}</div>
							</div>
						</Box>
					</div>
				)}
			</div>
		</div>
	);
};

export default CartLayout;
