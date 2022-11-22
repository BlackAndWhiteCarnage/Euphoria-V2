/**
 * External dependencies
 */
import { FC, useState } from 'react';

/**
 * Internal dependencies
 */
import { Box, Button, Price } from 'elements';
import { CheckboxProps } from 'elements/Checkbox/Checkbox';
import { ExtrasPopup } from 'fragments';
import { PriceProps } from 'types/price';
import { useIsInCart, usePopup } from 'hooks';
import { CartItemType, useStateContext } from 'contexts/CartContext';
import Image from 'next/image';
import classes from './ItemPreview.module.scss';

type ItemPreviewProps = CartItemType & PriceProps;

const ItemPreview: FC<ItemPreviewProps> = ({
	count,
	extras,
	image,
	options,
	slug,
	title,
	...props
}) => {
	const { remove, updateExtras } = useStateContext();
	const isInCart = useIsInCart(slug);
	const popup = usePopup();

	const [selected, setSelected] = useState(isInCart.extras);

	const onSelectChange = (itemId: string) => {
		setSelected(
			!selected.includes(itemId)
				? [...selected, itemId]
				: selected.filter((el: string) => el !== itemId)
		);
	};

	const onSelectCancel = () => {
		if (!isInCart?.extras) return;

		setSelected(isInCart.extras);
	};

	const hasExtras = selected?.length > 0;

	return (
		<Box>
			<div className={classes.itemPreview}>
				<div className={classes.image}>
					<Image src={image} alt={title} fill />
				</div>
				<div className={classes.itemPreviewInner}>
					<div className={classes.itemInfo}>
						<h2 className={classes.name}>{title}</h2>
						{selected && (
							<>
								<p className={classes.extrasLabel}>
									{hasExtras
										? `Wybrane dodatki (${selected.length})`
										: 'Nie wybrałeś żadnych dodatków!'}
								</p>
								<ul className={classes.extras}>
									{selected.map((el: string) => (
										<li key={el} className={classes.extrasItem}>
											{el}
										</li>
									))}
								</ul>
							</>
						)}
					</div>
					<div className={classes.otherInfo}>
						<Price {...props} />
						{selected && (
							<Button onClick={() => popup.open()}>
								<>{hasExtras ? 'Zmień' : 'Wybierz'} dodatki</>
							</Button>
						)}
						<Button type="alert" onClick={() => remove(slug)}>
							Usuń
						</Button>
					</div>
				</div>
			</div>
			<ExtrasPopup
				label="Wybierz dodatki"
				choosen={selected}
				items={options || []}
				count={count}
				id={slug}
				onChange={onSelectChange as CheckboxProps['onChange']}
				onCancel={onSelectCancel}
				onConfirm={() => {
					updateExtras(slug, selected);
				}}
				{...popup}
			/>
		</Box>
	);
};

export default ItemPreview;
