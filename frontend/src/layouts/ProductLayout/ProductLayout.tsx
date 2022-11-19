/**
 * External dependencies
 */
import { FC, useState } from 'react';
import Sticky from 'react-stickynode';

/**
 * Internal dependencies
 */
import { Button, Loader, Price, Header } from 'elements';
import { formatToImagesArray, getImageUrl } from 'utils';
import { ImagesPreview, ExtrasPopup } from 'fragments';
import { useGetProduct, usePopup, useIsInCart } from 'hooks';
import { useStateContext } from 'contexts/CartContext';
import { CheckboxProps } from 'elements/Checkbox/Checkbox';
import classes from './ProductLayout.module.scss';

const ProductLayout: FC = () => {
	const isInCart = useIsInCart();
	const [addedExtras, setAddedExtras] = useState<Array<string>>(
		isInCart?.extras || []
	);

	const { add, updateExtras, remove } = useStateContext();

	const { product, ready, error } = useGetProduct();
	const popup = usePopup();

	if (!ready) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;

	const { title, price, extras, images, slug } = product;

	const hasExtras = !!extras.data;

	const handleToggleSingle = (value: string) =>
		setAddedExtras(
			!addedExtras.includes(value)
				? [...addedExtras, value]
				: addedExtras.filter((el) => el !== value)
		);

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
							disabled={isInCart}
							size="large"
							onClick={() => {
								add({
									image: getImageUrl(images),
									title,
									price,
									slug,
								});

								hasExtras && popup.open();
							}}
						>
							Dodaj do koszyka
						</Button>
						{isInCart && (
							<div className={classes.buttons}>
								{hasExtras && (
									<Button size="large" onClick={() => popup.open()}>
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
					choosenItems={addedExtras}
					items={extras.data.attributes.extras.extras}
					count={extras.data.attributes.extras.count}
					onChange={handleToggleSingle as CheckboxProps['onChange']}
					onConfirm={() => {
						updateExtras(slug, addedExtras);
					}}
					{...popup}
				/>
			)}
		</>
	);
};

export default ProductLayout;
