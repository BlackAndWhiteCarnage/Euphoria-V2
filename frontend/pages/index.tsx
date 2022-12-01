import { SliderProvider } from 'fragments';
import { WithFormLayout } from 'layouts';

const Home = () => (
	<>
		<SliderProvider specyficCategory="majtki" />
		<SliderProvider specyficCategory="skarpetki" />
		<SliderProvider specyficCategory="rajstopy" />
		<SliderProvider specyficCategory="sesje" />
		<SliderProvider specyficCategory="inne" />
	</>
);

Home.PageLayout = WithFormLayout;

export default Home;
