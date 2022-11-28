import { SliderProvider } from 'fragments';
import { getFirestore, collection, getDocs } from 'firebase/firestore';

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
