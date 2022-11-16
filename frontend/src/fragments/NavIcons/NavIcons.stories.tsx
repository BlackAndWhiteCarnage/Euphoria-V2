/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { ReactComponent as Heart } from 'images/icons/heart.svg';
import { ReactComponent as Person } from 'images/icons/person.svg';
import { ReactComponent as Shopper } from 'images/icons/shopper.svg';

/**
 * Internal dependencies
 */
import NavIcons from '.';

export default {
	title: 'Fragments/NavIcons',
	component: NavIcons,
} as ComponentMeta<typeof NavIcons>;

const Template: ComponentStory<typeof NavIcons> = (args) => (
	<NavIcons {...args} />
);

export const Default = Template.bind({});
Default.args = {
	items: [
		{
			href: '/',
			icon: <Heart />,
		},
		{
			href: '/',
			icon: <Person />,
		},
		{
			count: 12,
			href: '/',
			icon: <Shopper />,
		},
	],
};
