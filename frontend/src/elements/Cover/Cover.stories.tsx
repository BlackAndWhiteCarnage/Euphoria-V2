/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Cover from '.';

export default {
	title: 'Elements/Cover',
	component: Cover,
} as ComponentMeta<typeof Cover>;

const Template: ComponentStory<typeof Cover> = (args) => <Cover {...args} />;

export const Default = Template.bind({});
Default.args = {
	image: {
		src: 'https://res.cloudinary.com/di13dms8p/image/upload/v1670077883/Zdj%C4%99cia%20do%20kupon%C3%B3w/IMG_3912_1_clfsci.png',
		alt: 'alt text',
	},
	text: 'Darmowa dostawa już od 100zł!',
};

export const WithDiscount = Template.bind({});
WithDiscount.args = {
	image: {
		src: 'https://res.cloudinary.com/di13dms8p/image/upload/v1670077883/Zdj%C4%99cia%20do%20kupon%C3%B3w/IMG_3912_1_clfsci.png',
		alt: 'alt text',
	},
	text: '-10% od całego zamówienia do końca Grudnia!',
	discountCode: 'EUPHORIA10',
};
