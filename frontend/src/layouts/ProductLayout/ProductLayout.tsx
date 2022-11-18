/**
 * External dependencies
 */
import { FC, ReactElement } from 'react';
import Sticky from 'react-stickynode';

/**
 * Internal dependencies
 */
import { ButtonProps } from 'elements/Button/Button';
import { ImagesPreviewProps } from 'fragments/ImagesPreview/ImagesPreview';
import { Loader, Header } from 'elements';
import { PriceProps } from 'types/price';
import { Slider } from 'fragments';
import { useGetAllCategoryProducts } from 'hooks';
import { HeaderProps } from 'elements/Header/Header';
import classes from './ProductLayout.module.scss';

type ProductLayoutProps = {
	header: ReactElement<HeaderProps>;
	imagesPreview: ReactElement<ImagesPreviewProps>;
	priceComponent: ReactElement<PriceProps>;
	button: ReactElement<ButtonProps>;
	description: string;
};

const ProductLayout: FC<ProductLayoutProps> = ({
	header,
	imagesPreview,
	priceComponent,
	button,
	description,
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
				<Header text={`Inne w kategorii ${category}`} />
				<Slider />
			</div>
		</>
	);
};

export default ProductLayout;
