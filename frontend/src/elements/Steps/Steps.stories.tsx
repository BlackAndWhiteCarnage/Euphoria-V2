/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import { ReactComponent as CardIcon } from 'images/icons/card.svg';
import { ReactComponent as CartIcon } from 'images/icons/cart.svg';
import { ReactComponent as TruckIcon } from 'images/icons/truck.svg';
import Steps from '.';

export default {
	title: 'Elements/Steps',
	component: Steps,
} as ComponentMeta<typeof Steps>;

const Template: ComponentStory<typeof Steps> = (args) => <Steps {...args} />;

export const Default = Template.bind({});
Default.args = {
	activeStep: 'Podsumowanie',
	steps: [
		{
			icon: <CartIcon />,
			name: 'Podsumowanie',
		},
		{
			icon: <TruckIcon />,
			name: 'Dostawa',
		},
		{
			icon: <CardIcon />,
			name: 'Płatność',
		},
	],
};
