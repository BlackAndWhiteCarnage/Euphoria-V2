/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import welcome from 'images/welcome.png';
import Slider from '.';

export default {
	title: 'Fragments/Slider',
	component: Slider,
} as ComponentMeta<typeof Slider>;

const Template: ComponentStory<typeof Slider> = (args) => (
	<div style={{ maxWidth: '1274px', margin: 'auto' }}>
		<Slider {...args} />
	</div>
);

const items = new Array(9).fill({
	href: '/',
	image: welcome.src,
	name: 'Seksowna sesja zdjęciowa Króliczka Playboya',
	price: 160,
});

export const Default = Template.bind({});
Default.args = {
	items,
};
