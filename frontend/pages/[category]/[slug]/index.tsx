/**
 * Internal dependencies
 */
import { Button, Loader, Price, Header } from 'elements';
import { formatToImagesArray } from 'utils';
import { ImagesPreview } from 'fragments';
import { ProductLayout } from 'layouts';
import { useGetProduct } from 'hooks';

const Product = () => {
	const { ready, error, product } = useGetProduct();

	if (!ready) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;

	const { title, price, extras, images } = product;

	return (
		<ProductLayout
			imagesPreview={
				<ImagesPreview images={formatToImagesArray(images, title)} />
			}
			header={<Header text={title} />}
			priceComponent={<Price price={price} />}
			button={
				<Button size="large">
					<>Dodaj do koszyka {extras.data && 'i wybierz dodatki'}</>
				</Button>
			}
			description="Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam sodales sodales tristique. Integer et ultricies ipsum, id viverra ligula. Vivamus condimentum quam efficitur nibh luctus, nec hendrerit risus porta. Sed consequat urna imperdiet, malesuada felis id, dapibus eros. Suspendisse sed nunc nec tellus mollis mattis. Aliquam rhoncus risus ante, a lobortis turpis condimentum id. Quisque porta purus vel libero luctus venenatis. Morbi vitae consequat lacus, quis porttitor tortor. Nulla luctus justo et nibh molestie, quis viverra arcu tempor. Mauris condimentum pharetra magna, eu sollicitudin est accumsan vel. Curabitur vel hendrerit augue, at hendrerit tellus."
		/>
	);
};

export default Product;
