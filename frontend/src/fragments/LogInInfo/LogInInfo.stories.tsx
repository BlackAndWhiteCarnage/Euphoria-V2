/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import LogInInfo from '.';

export default {
	title: 'Fragments/LogInInfo',
	component: LogInInfo,
} as ComponentMeta<typeof LogInInfo>;

const Template: ComponentStory<typeof LogInInfo> = (args) => (
	<div style={{ maxWidth: '168px', margin: 'auto' }}>
		<LogInInfo {...args} />
	</div>
);

export const Default = Template.bind({});
Default.args = {};
