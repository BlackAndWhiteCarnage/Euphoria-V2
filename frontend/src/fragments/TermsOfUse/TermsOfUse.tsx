/**
 * External dependencies
 */
import { FC } from 'react';
import Link from 'next/link';

/**
 * Internal dependencies
 */
import { Checkbox } from 'elements';
import classes from './TermsOfUse.module.scss';

type TermsOfUseProps = {
	onChange: (value: any) => void;
	checked: boolean;
};

const TermsOfUse: FC<TermsOfUseProps> = ({ onChange, checked }) => (
	<div className={classes.wrapper}>
		<Checkbox id="regulamin" getValue checked={checked} onChange={onChange} />
		<label htmlFor="regulamin" className={classes.label}>
			Zapoznałem się i akceptuję{' '}
			<Link href="/regulamin" className={classes.link}>
				regulamin
			</Link>
		</label>
	</div>
);

export default TermsOfUse;
