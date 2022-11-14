/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Price from '.';

export default {
	title: 'Elements/Price',
	component: Price,
} as ComponentMeta<typeof Price>;

const Template: ComponentStory<typeof Price> = (args) => <Price {...args} />;

export const Default = Template.bind({});
Default.args = {
	price: 120,
};

export const WithDiscount = Template.bind({});
WithDiscount.args = {
	discount: 5,
	price: 120,
};

export const IsFree = Template.bind({});
IsFree.args = {
	price: 120,
	isFree: true,
};
