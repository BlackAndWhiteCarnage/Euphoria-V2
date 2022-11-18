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
	const { products, ready, error, category } =
		useGetAllCategoryProducts(specyficCategory);

	const router = useRouter();
	const { slug: urlSlug } = router.query;

	const items: Array<CardProps> = [];

	const excludePreviewedProduct = products.filter(
		({ attributes: { slug } }) => slug !== urlSlug
	);

	arrayShuffle(excludePreviewedProduct).forEach(
		({ attributes: { slug, title, price, images } }, i) => {
			if (i > count - 1) return;
			items.push({
				name: title,
				price,
				href: `/${specyficCategory || category}/${slug}`,
				image: getImageUrl(images),
			});
		}
	);

	return { items, ready, error, category };
};

export default useGetSliderProducts;
