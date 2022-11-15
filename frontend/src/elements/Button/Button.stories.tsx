/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Button from '.';

export default {
	title: 'Elements/Button',
	component: Button,
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Primary = Template.bind({});
Primary.args = {
	children: 'Zmień dodatki',
};

export const Alert = Template.bind({});
Alert.args = {
	children: 'Usuń',
	type: 'alert',
};

export const Disabled = Template.bind({});
Disabled.args = {
	children: 'Przejdź dalej',
	disabled: true,
};

export const Large = Template.bind({});
Large.args = {
	children: 'Zaloguj się',
	size: 'large',
};

export const SmallWithHref = Template.bind({});
SmallWithHref.args = {
	children: 'Przejdź dalej',
	size: 'small',
	href: 'https://www.google.pl/',
	target: '_blank',
};
