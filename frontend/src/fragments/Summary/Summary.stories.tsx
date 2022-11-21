/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import Summary from '.';

export default {
	title: 'Fragments/Summary',
	component: Summary,
} as ComponentMeta<typeof Summary>;

const Template: ComponentStory<typeof Summary> = (args) => (
	<div style={{ maxWidth: '1274px', margin: 'auto' }}>
		<Summary {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
