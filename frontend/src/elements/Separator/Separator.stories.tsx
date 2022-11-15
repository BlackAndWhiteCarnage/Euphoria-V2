/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Separator from '.';

export default {
	title: 'Elements/Separator',
	component: Separator,
} as ComponentMeta<typeof Separator>;

const Template: ComponentStory<typeof Separator> = (args) => (
	<Separator {...args} />
);

export const Default = Template.bind({});
Default.args = {};

export const WithChangedMargins = Template.bind({});
WithChangedMargins.args = {
	margin: 40,
};

export const WithChildren = Template.bind({});
WithChildren.args = {
	mobileBottom: 0,
	mobileTop: 50,
	children: 'lub',
};
