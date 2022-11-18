/**
 * External dependencies
 */
import { useRouter } from 'next/router';
import arrayShuffle from 'array-shuffle';

/**
 * Internal dependencies
 */
import { CardProps } from 'fragments/Card/Card';
import { getImageUrl } from 'utils';
import { useGetAllCategoryProducts } from 'hooks';

const useGetSliderProducts = (specyficCategory?: string, count: number = 9) => {
	const {
		products: allProducts,
		ready,
		error,
		category,
	} = useGetAllCategoryProducts(specyficCategory);

	const router = useRouter();
	const { slug: urlSlug } = router.query;

	const items: Array<CardProps> = [];

	const excludeCurrentProduct = allProducts.filter(
		({ attributes: { slug } }) => slug !== urlSlug
	);

	arrayShuffle(excludeCurrentProduct).forEach(
		({ attributes: { slug, title, price, images } }, i) => {
			if (i > count - 1) return;
			items.push({
				name: title,
				price,
				href: !specyficCategory
					? `/${category}/${slug}`
					: `/${specyficCategory}/${slug}`,
				image: getImageUrl(images),
			});
		}
	);

	return { items, ready, error };
};

export default useGetSliderProducts;
