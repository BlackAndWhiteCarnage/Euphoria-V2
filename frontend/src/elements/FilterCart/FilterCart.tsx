/**
 * External dependencies
 */
import { FC, useEffect, useState } from 'react';

/**
 * Internal dependencies
 */
import { checkIfProductsStillExist } from 'utils';
import { InfoPopup } from 'fragments';
import { usePopup } from 'hooks';
import { useStateContext } from 'contexts/CartContext';

const FilterCart: FC = () => {
	const [checkValue, setCheckValue] = useState<any>(null);
	const popup = usePopup();

	const { cart, filterCart } = useStateContext();

	const filter = async () => {
		const check = await checkIfProductsStillExist(cart);

		setCheckValue(check);
	};

	useEffect(() => {
		filter();
	}, []);

	useEffect(() => {
		if (!checkValue) return;

		checkValue.includes('') && popup.open();
	}, [checkValue]);

	return (
		<InfoPopup
			label="Niektóre produkty w Twoim koszyku były już niedostępne więc zostały usunięte."
			{...popup}
			close={() => {
				filterCart(checkValue);
				popup.close();
			}}
		/>
	);
};

export default FilterCart;
