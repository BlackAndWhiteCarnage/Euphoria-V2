/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

/**
 * Internal dependencies
 */
import background from 'images/welcome.png';
import Popup from '.';

export default {
	title: 'Elements/Popup',
	component: Popup,
} as ComponentMeta<typeof Popup>;

const Template: ComponentStory<typeof Popup> = (args) => {
	const [, updateArgs] = useArgs();

	return (
		<>
			<img src={background.src} alt="" />
			<Popup
				{...args}
				close={() => updateArgs({ ...args, isOpen: !args.isOpen })}
			/>
		</>
	);
};

export const Default = Template.bind({});
Default.args = {
	children: <p style={{ margin: 0 }}>Content Here!</p>,
	isOpen: true,
};
