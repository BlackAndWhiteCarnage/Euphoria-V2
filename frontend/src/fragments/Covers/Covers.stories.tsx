/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Covers from '.';

export default {
	title: 'Fragments/Covers',
	component: Covers,
} as ComponentMeta<typeof Covers>;

const Template: ComponentStory<typeof Covers> = (args) => <Covers {...args} />;

export const Default = Template.bind({});
Default.args = {
	covers: [
		{
			image: {
				src: 'https://res.cloudinary.com/di13dms8p/image/upload/v1670077883/Zdj%C4%99cia%20do%20kupon%C3%B3w/IMG_3912_1_clfsci.png',
				alt: 'alt text',
			},
			text: 'Darmowa dostawa już od 100zł!',
		},
		{
			image: {
				src: 'https://res.cloudinary.com/di13dms8p/image/upload/v1670077883/Zdj%C4%99cia%20do%20kupon%C3%B3w/IMG_3912_1_clfsci.png',
				alt: 'alt text',
			},
			text: '-10% od całego zamówienia do końca Grudnia!',
			discountCode: 'EUPHORIA10',
		},
	],
};
