/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import welcome from 'images/welcome.png';
import ItemPreview from '.';

export default {
	title: 'Fragments/ItemPreview',
	component: ItemPreview,
} as ComponentMeta<typeof ItemPreview>;

const Template: ComponentStory<typeof ItemPreview> = (args) => (
	<div style={{ maxWidth: '663px' }}>
		<ItemPreview {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	image: '',
	title: 'Seksowna sesja zdjęciowa Króliczka Playboya',
	price: 120,
	extras: [
		'Piss',
		'10 Seksownych zdjęć w tych majteczkach',
		'Zabawa do ograzmu w tych majteczkach',
		'Noszenie 3 dni',
		'10 Prywatnch zdjęć',
	],
};

export const WithToManyText = Template.bind({});
WithToManyText.args = {
	image: '',
	title:
		'Seksowna sesja zdjęciowa Króliczka Playboya która jest super i w ogóle',
	price: 120,
	discount: 5,
	extras: [
		'Piss',
		'10 Seksownych zdjęć w tych majteczkach',
		'Zabawa do ograzmu w tych majteczkach',
		'Noszenie 3 dni',
		'10 Prywatnch zdjęć',
	],
};

export const WithoutExtras = Template.bind({});
WithoutExtras.args = {
	image: '',
	title:
		'Seksowna sesja zdjęciowa Króliczka Playboya która jest super i w ogóle',
	price: 120,
	discount: 5,
};
