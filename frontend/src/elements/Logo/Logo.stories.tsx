/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Logo from '.';

export default {
	title: 'Elements/Logo',
	component: Logo,
} as ComponentMeta<typeof Logo>;

const Template: ComponentStory<typeof Logo> = (args) => <Logo {...args} />;

export const Default = Template.bind({});
Default.args = {};
