/**
 * External dependencies
 */
import { ComponentStory, ComponentMeta } from '@storybook/react';
import Card from 'fragments/Card';

/**
 * Internal dependencies
 */
import welcome from 'images/welcome.png';
import Grid from '.';

export default {
	title: 'Fragments/Grid',
	component: Grid,
} as ComponentMeta<typeof Grid>;

const Template: ComponentStory<typeof Grid> = (args) => (
	<div style={{ maxWidth: '1274px', margin: 'auto' }}>
		<Grid {...args} />
	</div>
);

const children = new Array(9).fill(
	<Card
		href="/"
		image={welcome.src}
		name="Seksowna sesja zdjęciowa Króliczka Playboya"
		price={160}
	/>
);

export const Default = Template.bind({});
Default.args = {
	children,
};
