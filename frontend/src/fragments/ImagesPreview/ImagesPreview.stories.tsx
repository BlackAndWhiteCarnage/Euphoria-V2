/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';

/**
 * Internal dependencies
 */
import ImagesPreview from '.';

export default {
	title: 'Fragments/ImagesPreview',
	component: ImagesPreview,
} as ComponentMeta<typeof ImagesPreview>;

const Template: ComponentStory<typeof ImagesPreview> = (args) => (
	<ImagesPreview {...args} />
);

export const Default = Template.bind({});
Default.args = {
	images: [
		{
			src: 'https://images.unsplash.com/photo-1668537472212-b79c4f3e8591?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0fHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
			alt: 'alt',
		},
		{
			src: 'https://images.unsplash.com/photo-1668364283547-e638e9993217?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHwyfHx8ZW58MHx8fHw%3D&auto=format&fit=crop&w=500&q=60',
			alt: 'alt',
		},
	],
};
