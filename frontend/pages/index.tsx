import { SliderProvider } from 'fragments';

const Home = () => (
	<>
		<SliderProvider category="majtki" label="Majtki" />
		<SliderProvider category="skarpetki" label="Skarpetki" />
		<SliderProvider category="rajstopy" label="Rajstopy i Pończochy" />
		<SliderProvider category="sesje" label="Sesje Zdjęciowe" />
		<SliderProvider category="inne" label="Inne" />
	</>
);

export default Home;
