/**
 * External dependencies
 */
import { FC, useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import { useUser } from '@auth0/nextjs-auth0';

/**
 * Internal dependencies
 */
import { Box, Header, Price, Separator } from 'elements';
import { ReactComponent as Arrow } from 'images/icons/arrow.svg';
import classes from './OrdersHistoryLayout.module.scss';

const Order = ({ order }: any) => {
	const [isOpen, setIsOpen] = useState(false);
	const moreInfoRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!moreInfoRef.current) return;

		moreInfoRef.current.style.height = isOpen
			? `${moreInfoRef.current.scrollHeight}px`
			: '0';
	}, [isOpen]);

	const convertedOrderData = order?.metadata?.OrderData?.split('|')
		.map((element: any) => element.split(',').filter((el: any) => el !== ''))
		.filter((el: any) => el.length);

	const convertedOrderDataToObjects = convertedOrderData?.map((x: any) => ({
		title: x[0],
		price: Number(x[1]),
	}));

	return (
		<li key={order.id} className={classes.order}>
			<Box>
				<div className={classes.previewInfo}>
					<p className={classes.orderNumber}>
						<b>Numer zamówienia:</b> {order.id}
					</p>
					<p className={classes.orderStatus}>
						<b>Status: </b>
						{order.status === 'succeeded' ? 'Zakończona' : 'Anulowana'}
					</p>
					<span className={classes.orderPrice}>
						Razem: <Price price={order.amount / 100} />
					</span>
					<button
						className={classnames(classes.openButton, {
							[classes['is-open']]: isOpen,
						})}
						onClick={() => setIsOpen(!isOpen)}
					>
						<Arrow />
					</button>
				</div>
				<div className={classes.moreInfo} ref={moreInfoRef}>
					<Separator />
					<ul className={classes.moreInfoList}>
						{convertedOrderDataToObjects?.map(
							({ title, price }: any, index: number) => (
								<li className={classes.orderItem} key={index}>
									{title}
									<Price price={price} />
								</li>
							)
						)}
					</ul>
				</div>
			</Box>
		</li>
	);
};

type OrdersHistoryLayoutProps = {
	data: any;
};

const OrderHistoryLayout: FC<OrdersHistoryLayoutProps> = ({ data }) => {
	const user = useUser();

	const { orders } = data;

	const { paymentIntents } = orders;

	console.log(data.user.email);
	console.log('paymentIntents', paymentIntents);

	return (
		<ul className={classes.wrapper}>
			{paymentIntents.data.length > 0 ? (
				paymentIntents.data.map((order: any, index: number) => {
					if (order.receipt_email !== data.user.emai) return;

					return <Order order={order} key={index} />;
				})
			) : (
				<Header text="Jeszcze nie masz żadnych zamówień" />
			)}
		</ul>
	);
};

export default OrderHistoryLayout;
