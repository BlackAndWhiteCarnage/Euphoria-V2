/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

/**
 * Internal dependencies
 */
import List from '.';

export default {
	title: 'Fragments/List',
	component: List,
} as ComponentMeta<typeof List>;

const Template: ComponentStory<typeof List> = (args) => {
	const [, updateArgs] = useArgs();

	return (
		<div style={{ maxWidth: '1274px', margin: 'auto' }}>
			<List {...args} />
		</div>
	);
};

export const Default = Template.bind({});
Default.args = {
	items: [
		'Piss',
		'Scat',
		'10 sexy zdjęć w tej rzeczy',
		'10 prywatnych zdjęć z mojego telefonu',
		'Noszenie 2 lub 3 dni, daj znać ile wolisz po zakupie!',
		'Kilkusekundowe sexy nagranie w tej rzeczy',
		'Uprawianie sportu',
		'3 zdjęcia z Twoim imieniem lub nickiem na mojej pupie',
	],
};
