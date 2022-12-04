/**
 * External dependencies
 */
import Stripe from 'stripe';
import { useQuery } from 'urql';

/**
 * Internal dependencies
 */
import { Covers, SliderProvider } from 'fragments';
import { GET_ALL_POSTERS } from 'graphqlQueries';
import { Loader } from 'elements';
import { mergeCovers } from 'utils';
import { WithFormLayout } from 'layouts';
import Head from 'next/head';

const stripe = new Stripe(`${process.env.NEXT_PUBLIC_STRIPE_SECRET || ''}`, {
	apiVersion: '2022-11-15',
});

export async function getServerSideProps() {
	const coupons = await stripe.coupons.list({
		limit: 1,
	});

	return {
		props: { coupons },
	};
}

const Home = ({ coupons }: any) => {
	const { data } = coupons;

	const [results] = useQuery({
		query: GET_ALL_POSTERS,
	});

	const { data: posters, fetching } = results;

	if (fetching) return <Loader />;

	return (
		<>
			<Head>
				<title>EUPHORIA | Strona Główa</title>
			</Head>
			<Covers covers={mergeCovers(data, posters)} />
			<SliderProvider specyficCategory="majtki" />
			<SliderProvider specyficCategory="skarpetki" />
			<SliderProvider specyficCategory="rajstopy" />
			<SliderProvider specyficCategory="sesje" />
			<SliderProvider specyficCategory="inne" />
		</>
	);
};

Home.PageLayout = WithFormLayout;

export default Home;
