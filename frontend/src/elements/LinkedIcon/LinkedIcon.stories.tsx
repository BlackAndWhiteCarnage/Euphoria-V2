/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { ReactComponent as Shopper } from 'images/icons/shopper.svg';
import LinkedIcon from '.';

export default {
	title: 'Elements/LinkedIcon',
	component: LinkedIcon,
} as ComponentMeta<typeof LinkedIcon>;

const Template: ComponentStory<typeof LinkedIcon> = (args) => (
	<LinkedIcon {...args} />
);

export const Default = Template.bind({});
Default.args = {
	href: '/',
	icon: <Shopper />,
};

export const WithCount = Template.bind({});
WithCount.args = {
	count: 12,
	href: '/',
	icon: <Shopper />,
};
