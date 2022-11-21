/**
 * External dependencies
 */
import { FC, PropsWithChildren, useState } from 'react';

/**
 * Internal dependencies
 */
import { Header, Box } from 'elements';
import { useStateContext, CartItemType } from 'contexts/CartContext';
import { ItemPreview, ShippingMethod, Summary, LogInInfo } from 'fragments';
import classes from './CartLayout.module.scss';

const CartLayout: FC<PropsWithChildren> = () => {
	const [step, setStep] = useState(1);
	const [location, setLocation] = useState('');

	const { cart } = useStateContext();

	const handleStepChange = () => setStep(step + 1);

	const isEmpty = cart.length > 0;

	return (
		<div className={classes.layout}>
			<Header
				text={isEmpty ? `Koszyk (${cart.length})` : 'Twój koszyk jest pusty'}
			/>
			<div className={classes.wrapper}>
				<div className={classes.cart}>
					<ul className={classes.cartItems}>
						{cart.map(
							({
								count,
								extras,
								image,
								options,
								price,
								slug,
								title,
							}: CartItemType) => (
								<ItemPreview
									key={slug}
									title={title}
									image={{
										src: image,
										alt: title,
									}}
									count={count}
									extras={extras}
									options={options || []}
									price={price}
									slug={slug}
								/>
							)
						)}
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
