/**
 * External dependencies
 */
import { FC, ReactElement, useState } from 'react';
import Sticky from 'react-stickynode';

/**
 * Internal dependencies
 */
import { Button, Loader, Price, Header } from 'elements';
import { formatToImagesArray } from 'utils';
import { ImagesPreview, ExtrasPopup } from 'fragments';
import { useGetProduct, usePopup } from 'hooks';
import classes from './ProductLayout.module.scss';

const ProductLayout: FC = () => {
	const { product, ready, error } = useGetProduct();
	const popup = usePopup();

	if (!ready) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;

	const { title, price, extras, images } = product;

	const hasExtras = !!extras.data;

	return (
		<>
			<div className={classes.layout} id="product-layout">
				<div className={classes.images}>
					<Header text={title} />
					<ImagesPreview images={formatToImagesArray(images, title)} />
				</div>
				<Sticky
					className={classes.sticky}
					top={40}
					bottomBoundary="#product-layout"
				>
					<div className={classes.aside}>
						<p className={classes.description}>
							Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
							sodales sodales tristique. Integer et ultricies ipsum, id viverra
							ligula. Vivamus condimentum quam efficitur nibh luctus, nec
							hendrerit risus porta. Sed consequat urna imperdiet, malesuada
							felis id, dapibus eros. Suspendisse sed nunc nec tellus mollis
							mattis. Aliquam rhoncus risus ante, a lobortis turpis condimentum
							id. Quisque porta purus vel libero luctus venenatis. Morbi vitae
							consequat lacus, quis porttitor tortor. Nulla luctus justo et nibh
							molestie, quis viverra arcu tempor. Mauris condimentum pharetra
							magna, eu sollicitudin est accumsan vel. Curabitur vel hendrerit
							augue, at hendrerit tellus.
						</p>
						<Price price={price} />
						<Button
							size="large"
							onClick={() =>
								hasExtras ? popup.open() : console.log('do smomething else')
							}
						>
							<>Dodaj do koszyka {hasExtras && 'i wybierz dodatki'}</>
						</Button>
					</div>
				</Sticky>
			</div>
			{hasExtras && (
				<ExtrasPopup
					items={extras.data.attributes.extras.extras}
					count={extras.data.attributes.extras.count}
					onChange={(e) => console.log(e)}
					{...popup}
				/>
			)}
		</>
	);
};

export default ProductLayout;
