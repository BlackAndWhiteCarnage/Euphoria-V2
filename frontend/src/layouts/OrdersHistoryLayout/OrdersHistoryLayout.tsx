/**
 * External dependencies
 */
import { FC, useState, useRef, useEffect } from 'react';
import classnames from 'classnames';
import Stripe from 'stripe';

/**
 * Internal dependencies
 */
import { Box, Header, Price, Separator } from 'elements';
import { ReactComponent as Arrow } from 'images/icons/arrow.svg';
import classes from './OrdersHistoryLayout.module.scss';

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET}`, {
	apiVersion: '2022-11-15',
});

const Order = ({ order, sessionsIds }: any) => {
	const [isOpen, setIsOpen] = useState(false);
	const [data, setData] = useState<any>([]);
	const moreInfoRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!moreInfoRef.current) return;

		moreInfoRef.current.style.height = isOpen
			? `${moreInfoRef.current.scrollHeight}px`
			: '0';
	}, [isOpen]);

	const fetchData = async () => {
		await Promise.all(
			sessionsIds.forEach((id: string) => {
				setData(
					[...data].push(
						stripe?.checkout?.sessions?.listLineItems(id, { limit: 50 })
					)
				);
			})
		);
	};

	useEffect(() => {
		fetchData();
	}, []);

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
					{data && (
						<ul className={classes.moreInfoList}>
							{data?.data.map(({ description, price }: any, index: number) => (
								<li className={classes.orderItem} key={index}>
									{description}
									<Price price={price.unit_amount / 100} />
								</li>
							))}
						</ul>
					)}
				</div>
			</Box>
		</li>
	);
};

type OrdersHistoryLayoutProps = {
	data: any;
};

const OrderHistoryLayout: FC<OrdersHistoryLayoutProps> = ({ data }) => {
	const {
		orders: { paymentIntents, sessionsIds },
	} = data;

	return (
		<ul className={classes.wrapper}>
			{paymentIntents.data.length > 0 ? (
				paymentIntents.data.map((order: any, index: number) => (
					<Order order={order} sessionsIds={sessionsIds} key={index} />
				))
			) : (
				<Header text="Jeszcze nie masz żadnych zamówień" />
			)}
		</ul>
	);
};

export default OrderHistoryLayout;
