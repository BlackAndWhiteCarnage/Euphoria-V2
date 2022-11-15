/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import { useArgs } from '@storybook/client-api';

/**
 * Internal dependencies
 */
import Navigation from '.';

export default {
	title: 'Elements/Navigation',
	component: Navigation,
	argTypes: {
		activeTab: {
			type: 'string',
		},
	},
} as ComponentMeta<typeof Navigation>;

const Template: ComponentStory<typeof Navigation> = (args) => {
	const [, updateArgs] = useArgs();

	return (
		<Navigation
			{...args}
			onChange={(activeTab) => updateArgs({ ...args, activeTab })}
		/>
	);
};

export const Default = Template.bind({});
Default.args = {
	tabs: {
		'Strona Główna': '/strona-główna',
		Majtki: '/majtki',
		Skarpetki: '/skarpetki',
		'Rajstopy i Pończochy': '/rajstopy-i-pończochy',
		'Sesje Zdjęciowe': '/sesje-zdjęciowe',
		inne: '/inne',
	},
	activeTab: 'Strona Główna',
};
