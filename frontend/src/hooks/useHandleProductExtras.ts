/**
 * External dependencies
 */
import { useState, useEffect } from 'react';

/**
 * Internal dependencies
 */
import { useIsInCart, useGetProduct } from 'hooks';

const useHandleProductExtras = () => {
	const isInCart = useIsInCart();

	const { product, ready, error } = useGetProduct();

	const [extrasCount, setExtrasCount] = useState<number | undefined>();
	const [hasExtras, setHasExtras] = useState<boolean>();
	const [options, setOptions] = useState([]);
	const [selected, setSelected] = useState<Array<string>>([]);

	useEffect(() => {
		if (!isInCart?.extras && !ready) return;

		setSelected(isInCart?.extras);
	}, [isInCart, ready]);

	useEffect(() => {
		if (!ready) return;
		if (!product.extras.data) return;

		setHasExtras(!!product.extras.data);
		setOptions(product.extras.data.attributes.extras.extras);
		setExtrasCount(product.extras.data.attributes.extras?.count);
	}, [ready, product?.extras.data]);

	if (!product) return;

	const { title, price, images, slug, description, imagesCount, isPremium } =
		product;

	const onSelectChange = (itemId: string) =>
		setSelected(
			!selected.includes(itemId)
				? [...selected, itemId]
				: selected.filter((el) => el !== itemId)
		);

	const onSelectCancel = () => {
		if (!isInCart?.extras) return;

		setSelected(isInCart.extras);
	};

	return {
		error,
		extrasCount,
		hasExtras,
		images,
		isInCart,
		onSelectCancel,
		onSelectChange,
		options,
		price,
		selected,
		slug,
		title,
		description,
		imagesCount,
		isPremium,
	};
};

export default useHandleProductExtras;
