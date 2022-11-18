/**
 * External dependencies
 */
import { FC, ReactElement } from 'react';
import Sticky from 'react-stickynode';

/**
 * Internal dependencies
 */
import { ButtonProps } from 'elements/Button/Button';
import { HeaderProps } from 'elements/Header/Header';
import { ImagesPreviewProps } from 'fragments/ImagesPreview/ImagesPreview';
import { Loader } from 'elements';
import { PriceProps } from 'types/price';
import { SliderProvider } from 'fragments';
import { useGetAllCategoryProducts } from 'hooks';
import classes from './ProductLayout.module.scss';

type ProductLayoutProps = {
	button: ReactElement<ButtonProps>;
	description: string;
	header: ReactElement<HeaderProps>;
	imagesPreview: ReactElement<ImagesPreviewProps>;
	priceComponent: ReactElement<PriceProps>;
};

const ProductLayout: FC<ProductLayoutProps> = ({
	button,
	description,
	header,
	imagesPreview,
	priceComponent,
}) => {
	const { ready, error, category } = useGetAllCategoryProducts();

	if (!ready) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;

	return (
		<>
			<div className={classes.layout} id="product-layout">
				<div className={classes.images}>
					{header}
					{imagesPreview}
				</div>
				<Sticky
					className={classes.sticky}
					top={40}
					bottomBoundary="#product-layout"
				>
					<div className={classes.aside}>
						<p className={classes.description}>{description}</p>
						{priceComponent}
						{button}
					</div>
				</Sticky>
			</div>
			<div className={classes.slider}>
				<SliderProvider label={`Inne w kategorii ${category}`} />
			</div>
		</>
	);
};

export default ProductLayout;
