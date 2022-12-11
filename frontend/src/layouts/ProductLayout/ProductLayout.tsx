/**
 * External dependencies
 */
import { FC } from 'react';
import Sticky from 'react-stickynode';
import Head from 'next/head';
import toast from 'react-hot-toast';

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
		imagesCount,
		isPremium,
		title,
		description,
		customDescription,
	} = product;

	return (
		<>
			<Head>
				<title>EUPHORIA | {product?.title && title}</title>
			</Head>
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
						{isPremium && (
							<div className={classes.premium}>Produkt Premium</div>
						)}
						{imagesCount && (
							<div className={classes.imagesCount}>
								{imagesCount} | Zdjęć w sesji
							</div>
						)}
						<p className={classes.description}>
							{description?.data && !customDescription
								? description.data.attributes.description
								: customDescription}
						</p>

						<Price price={price} />
						<Button
							disabled={isInCart}
							size="large"
							onClick={() => {
								add({
									basePrice: price,
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
						{imagesCount && (
							<span className={classes.photoshootsInfo}>
								Kupując sesje zdjęciowe nie kupujesz licencji na nie. Są one
								wciąż tylko i wyłącznie moją własnością i nie wyrażam zgody na
								ich upublicznianie, mimo to oczywiście możesz je pobrać!
							</span>
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
