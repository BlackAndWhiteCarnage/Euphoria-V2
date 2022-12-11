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
import { WithFooterLayout, WithFormLayout } from 'layouts';
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

	return (
		<WithFormLayout>
			<Head>
				<title>EUPHORIA | Strona Główa</title>
				<meta
					name="description"
					content="Euphoria - Noszona używana bielizna | Majtki | Majteczki | Skarpetki | Rajstopy | Pończochy | Fetysz"
				/>
			</Head>
			{!fetching ? <Covers covers={mergeCovers(data, posters)} /> : <Loader />}
			<main>
				<SliderProvider
					specyficCategory="majtki"
					description="Fetysz majtek to moja specjalność! Jeśli jesteś entuzjastą noszonej
				bielizny, obstawiam że właśnie one będą Twoim pierwszym wyborem. Na
				mojej stronie znajdziesz na pewno coś ciekawego i mimo że moimi osobistymi
				faworytami będą zawsze stringi, w swojej ofercie używanych majtek mam
				także figi oraz brazyliany. Część rzeczy to także majtki premium, co oznacza że są to majtki markowe, prawdziwej Insta girl."
				/>
				<SliderProvider
					specyficCategory="skarpetki"
					description="Jeśli masz fetysz stóp to także świetnie trafiłeś. W mojej ofercie jest cała masa przeróżnych noszonych skarpetek które mogą być Twoje jeśli sobie tylko zażyczysz. W dodatku kupując któreś z nich jako jeden z dodatków możesz wybrać na przykład zdjęcia moich stópek lub noszenie 3 dni jeśli wolisz intensywniejszy zapach!"
				/>
				<SliderProvider
					specyficCategory="rajstopy"
					description="Noszona bielizna w postaci skarpetek to za mało? A może chcesz czegoś więcej? To świetnie bo noszone rajstopy i pończochy u mnie też znajdziesz. Co lepsze, jeśli nie możesz zdecydować się między skarpetkami a używanymi majtkami, możesz to połączyć wybierając rajstopy z dodatniem noszenie bez majtek."
				/>
				<SliderProvider
					specyficCategory="sesje"
					description="Nie interesują Cię noszone majtki ani inna bielizna? Chciałbyś zobaczyć moje seksowne zdjęcia? Więc jest to oferta idealna dla Ciebie ponieważ posiadam dość pokaźną kolekcję sesji zdjęciowych w różnych zestawach bielizny. Seksowne zdjęcia to mój konik bo każdy mi mówi że wyglądam na nich świetnie. Dostępne są sesje w bieliźnie oraz sesje topless."
				/>
				<SliderProvider
					specyficCategory="inne"
					description="W tej kategorii znajdziesz takie rzeczy jak noszone majtki i staniczki połączone w jeden zgrabny i idealnie zgrany zespół. Ponadto często pojawiają się także noszone kapcie lub piżamy. Aczkolwiek jeśli interesuję Cię coś innego z mojej używanej kolekcji lub masz własny pomysł, nie krępuj się i napisz do mnie. Razem na pewno coś wymyślimy!"
				/>
			</main>
		</WithFormLayout>
	);
};

Home.PageLayout = WithFooterLayout;

export default Home;
