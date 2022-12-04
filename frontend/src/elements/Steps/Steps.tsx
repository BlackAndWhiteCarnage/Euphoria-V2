/**
 * External dependencies
 */
import { FC, ReactElement } from 'react';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { ReactComponent as Arrow } from 'images/icons/arrow.svg';
import classes from './Steps.module.scss';

type StepType = {
	icon: ReactElement;
	name: string;
};

type StepsProps = {
	activeStep: string;
	steps: Array<StepType>;
};

const Steps: FC<StepsProps> = ({ activeStep, steps }) => (
	<div className={classes.wrapper}>
		<ul className={classes.steps}>
			{steps.map(({ name, icon }, index) => (
				<>
					<li
						className={classnames(classes.step, {
							[classes['is-active']]: activeStep === name,
						})}
					>
						{icon}
					</li>
					{index !== steps.length - 1 && <Arrow />}
				</>
			))}
		</ul>
		<p className={classes.name}>{activeStep}</p>
	</div>
);

export default Steps;
