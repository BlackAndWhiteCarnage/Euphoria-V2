/**
 * External dependencies
 */
import { useRouter } from 'next/router';

/**
 * Internal dependencies
 */
import { Loader } from 'elements';
import { useGetProduct } from 'hooks';
import { getNestedProductData, createImagesArray } from 'utils';
import { ImagesPreview } from 'fragments';

const PantiesProductPreview = () => {
	const router = useRouter();
	const { slug } = router.query;

	const { data, fetching, error } = useGetProduct(slug as any);

	if (fetching) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;

	const { title, price, extras, isPremium, imagesCount, images } =
		getNestedProductData(data);

	return (
		<div>
			<h1>{title}</h1>
			<ImagesPreview images={createImagesArray(images, title)} />
		</div>
	);
};

export default PantiesProductPreview;
