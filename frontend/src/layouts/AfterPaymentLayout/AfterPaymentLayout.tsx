/**
 * External dependencies
 */
import { FC } from 'react';
import Head from 'next/head';

/**
 * Internal dependencies
 */
import { Box, Button, Separator, Price } from 'elements';
import classes from './AfterPaymentLayout.module.scss';

type AfterPaymentLayoutProps = {
	isCanceled?: boolean;
	order?: any;
};

const AfterPaymentLayout: FC<AfterPaymentLayoutProps> = ({
	isCanceled,
	order,
}) => {
	return (
		<>
			<Head>
				<title>
					EUPHORIA |{' '}
					{isCanceled ? 'Płatność Anulowana 😣' : 'Potwierdzenie Zamówienia'}
				</title>
			</Head>
			<Box>
				<div className={classes.content}>
					<h1 className={classes.title}>
						{isCanceled
							? 'Płatność Anulowana 😣'
							: 'Dziękuję za zamówienie! 🥰'}
					</h1>
					{isCanceled ? (
						<>
							<Button href="/koszyk" size="large">
								Wróć do koszyka
							</Button>
							<Separator>lub</Separator>
							<Button href="/" size="large">
								Przejdź na Stronę główną
							</Button>
						</>
					) : (
						<div className={classes.order}>
							<p>
								Email potwierdzający został wysłany na adres{' '}
								<b>{order.customer_details.email}</b>
							</p>
							<Separator />
							<h2>Przedmioty zamówienia:</h2>
							<ul>
								{order.line_items.data.map((item: any) => (
									<li key={item.id} className={classes.orderItem}>
										<p>{item.description}</p>
										<Price price={item.price.unit_amount / 100} />
									</li>
								))}
							</ul>
							<Separator />
							{order.metadata.Paczkomat ? (
								<>
									<h2>Wybrany paczkomat</h2>
									<div className={classes.shipping}>
										<b>{order.metadata.Paczkomat}</b>
										<b>{order.metadata.Adres}</b>
										<b>{order.metadata.Ulica}</b>
									</div>
									<b>
										*Jeśli w przemiotach zamówienia były zdjęcia zostaną one
										niedługo udostępnione w folderze na Dysku Google a link do
										niego zostanie wysłany na wskazany przez Ciebie adres email,
										miłego oglądania!
									</b>
								</>
							) : (
								<b>
									*Fotki z sesji niedługo zostaną udostępnione w folderze na
									Dysku Google a link do niego zostanie wysłany na wskazany
									przez Ciebie adres email, miłego oglądania!
								</b>
							)}
						</div>
					)}
				</div>
			</Box>
		</>
	);
};

export default AfterPaymentLayout;
