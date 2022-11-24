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

const childrenArr = new Array(9).fill(1);

export const Default = Template.bind({});
Default.args = {
	children: childrenArr.map((_, i) => (
		<Card
			slug="slug"
			key={i}
			href="/"
			image={welcome.src}
			name="Seksowna sesja zdjęciowa Króliczka Playboya"
			price={160}
		/>
	)),
};
