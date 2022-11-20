/**
 * External dependencies
 */
import { FC } from 'react';
import Sticky from 'react-stickynode';

/**
 * Internal dependencies
 */
import { Button, Loader, Price, Header } from 'elements';
import { CheckboxProps } from 'elements/Checkbox/Checkbox';
import { formatToImagesArray, getImageUrl } from 'utils';
import { ImagesPreview, ExtrasPopup } from 'fragments';
import { usePopup, useHandleProductExtras } from 'hooks';
import { useStateContext } from 'contexts/CartContext';
import classes from './ProductLayout.module.scss';

const ProductLayout: FC = () => {
	const { add, updateExtras, remove } = useStateContext();
	const popup = usePopup();
	const product = useHandleProductExtras();

	if (!product) return <Loader />;

	const {
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
	} = product;

	return (
		<>
			<div className={classes.layout} id="product-layout">
				<div className={classes.images}>
					<Header text={title} />
					<ImagesPreview
						images={images && formatToImagesArray(images, title)}
					/>
				</div>
				<Sticky
					className={classes.sticky}
					top={40}
					bottomBoundary="#product-layout"
				>
					<div className={classes.aside}>
						<p className={classes.description}>
							{description?.data && description.data.attributes.description}
						</p>
						<Price price={price} />
						<Button
							disabled={isInCart}
							size="large"
							onClick={() => {
								add({
									count: extrasCount,
									extras: hasExtras ? [] : null,
									image: getImageUrl(images),
									options,
									price,
									slug,
									title,
								});
								hasExtras && popup.open();
							}}
						>
							Dodaj do koszyka
						</Button>
						{isInCart && (
							<div className={classes.buttons}>
								{hasExtras && (
									<Button
										size="large"
										onClick={() => {
											popup.open();
										}}
									>
										Edytuj dodatki
									</Button>
								)}
								<Button size="large" type="alert" onClick={() => remove(slug)}>
									Usuń z koszyka
								</Button>
							</div>
						)}
					</div>
				</Sticky>
			</div>
			{hasExtras && (
				<ExtrasPopup
					label="A może coś gratis?"
					choosen={selected}
					items={options}
					id={slug}
					count={extrasCount}
					onChange={onSelectChange as CheckboxProps['onChange']}
					onCancel={onSelectCancel}
					onConfirm={() => {
						updateExtras(slug, selected);
					}}
					{...popup}
				/>
			)}
		</>
	);
};

export default ProductLayout;
