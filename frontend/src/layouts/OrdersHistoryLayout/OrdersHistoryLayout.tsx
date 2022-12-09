/**
 * External dependencies
 */
import { FC, useState, useRef, useEffect } from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { Box, Header, Price, Separator } from 'elements';
import { ReactComponent as Arrow } from 'images/icons/arrow.svg';
import classes from './OrdersHistoryLayout.module.scss';

const Order = ({ order, lineItems }: any) => {
	const [isOpen, setIsOpen] = useState(false);
	const moreInfoRef = useRef<HTMLDivElement>(null);

	useEffect(() => {
		if (!moreInfoRef.current) return;

		moreInfoRef.current.style.height = isOpen
			? `${moreInfoRef.current.scrollHeight}px`
			: '0';
	}, [isOpen]);

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
					{/* <ul className={classes.moreInfoList}>
						{lineItems.data.map(
							({ description, price }: any, index: number) => (
								<li className={classes.orderItem} key={index}>
									{description}
									<Price price={price.unit_amount / 100} />
								</li>
							)
						)}
					</ul> */}
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
			{sessionsIds && sessionsIds.map((el: any) => <p>{el}</p>)}
			{paymentIntents.data.length > 0 ? (
				paymentIntents.data.map((order: any, index: number) => (
					<Order order={order} key={index} />
				))
			) : (
				<Header text="Jeszcze nie masz żadnych zamówień" />
			)}
		</ul>
	);
};

export default OrderHistoryLayout;
