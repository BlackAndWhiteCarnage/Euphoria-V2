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

const Template: ComponentStory<typeof Checkbox> = (args) => {
	const [, updateArgs] = useArgs();
	const id = 'checkbox-id';

	return (
		<label htmlFor={id}>
			<Checkbox
				{...args}
				id={id}
				onChange={() => updateArgs({ ...args, checked: !args.checked })}
			/>
			Checkbox Label
		</label>
	);
};

export const Default = Template.bind({});
Default.args = {};

export const Disabled = Template.bind({});
Disabled.args = {
	disabled: true,
};
