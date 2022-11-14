/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

/**
 * Internal dependencies
 */
import Favorites from '.';

export default {
	title: 'Elements/Favorites',
	component: Favorites,
} as ComponentMeta<typeof Favorites>;

const Template: ComponentStory<typeof Favorites> = (args) => {
	const [, updateArgs] = useArgs();

	return (
		<Favorites
			{...args}
			onClick={() => updateArgs({ ...args, isFavorite: !args.isFavorite })}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {
	isFavorite: true,
};
