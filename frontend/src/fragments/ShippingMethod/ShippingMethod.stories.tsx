/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import ShippingMethod from '.';

export default {
	title: 'Fragments/ShippingMethod',
	component: ShippingMethod,
} as ComponentMeta<typeof ShippingMethod>;

const Template: ComponentStory<typeof ShippingMethod> = (args) => (
	<div style={{ maxWidth: '1274px', margin: 'auto' }}>
		<ShippingMethod {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
