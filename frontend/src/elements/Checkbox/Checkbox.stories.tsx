/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

/**
 * Internal dependencies
 */
import Checkbox from '.';

export default {
	title: 'Elements/Checkbox',
	component: Checkbox,
} as ComponentMeta<typeof Checkbox>;

const Template: ComponentStory<typeof Checkbox> = (args) => (
	<Checkbox {...args} />
);

export const Default = Template.bind({});
Default.args = {
	checked: true,
};

export const Disabled = Template.bind({});
Disabled.args = {};
