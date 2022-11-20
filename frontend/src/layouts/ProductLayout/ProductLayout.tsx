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
	} = product;

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
									extras: [],
									count: extrasCount,
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
					choosen={selected}
					items={options}
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
