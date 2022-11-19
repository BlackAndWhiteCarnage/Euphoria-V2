import { SliderProvider } from 'fragments';

const Home = () => (
	<>
		<SliderProvider specyficCategory="majtki" />
		<SliderProvider specyficCategory="skarpetki" />
		<SliderProvider specyficCategory="rajstopy" />
		<SliderProvider specyficCategory="sesje" />
		<SliderProvider specyficCategory="inne" />
	</>
);

export default Home;
