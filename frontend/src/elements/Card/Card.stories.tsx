/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import welcome from 'images/welcome.png';
import Card from '.';

export default {
	title: 'Elements/Card',
	component: Card,
} as ComponentMeta<typeof Card>;

const Template: ComponentStory<typeof Card> = (args) => (
	<div style={{ maxWidth: '398px', width: '100%' }}>
		<Card {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {
	href: '/',
	image: welcome.src,
	name: 'Seksowna sesja zdjęciowa Króliczka Playboya',
	price: 160,
};

export const WithDiscount = Template.bind({});
WithDiscount.args = {
	discount: 10,
	href: '/',
	image: welcome.src,
	name: 'Seksowna sesja zdjęciowa Króliczka Playboya',
	price: 160,
};
