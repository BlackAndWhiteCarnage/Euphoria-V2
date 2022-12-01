/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';

/**
 * Internal dependencies
 */
import { Box, Button } from 'elements';
import classes from './WithFormLayout.module.scss';

const WithFormLayout: FC<PropsWithChildren> = ({ children }) => {
	const {
		register,
		handleSubmit,
		watch,
		formState: { errors },
	} = useForm();
	const onSubmit = (data) => console.log(data);

	console.log(errors);

	return (
		<>
			{children}
			<div className={classes.formWrap}>
				<h3 className={classes.header}>
					Nie znalazłeś tego czego szukałeś lub masz pytania?{' '}
					<span className={classes.decorator}>Pisz śmiało!</span>
				</h3>
				<Box>
					<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
						<label htmlFor="email" className={classes.label}>
							Email
						</label>
						<input
							id="email"
							type="text"
							className={classnames(classes.input, {
								[classes['has-error']]: errors.email,
							})}
							{...register('email', {
								required: true,
								pattern:
									/^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
							})}
						/>
						<label htmlFor="message" className={classes.label}>
							Wiadomość
						</label>
						<textarea
							id="message"
							className={classnames(classes.textarea, {
								[classes['has-error']]: errors.message,
							})}
							maxLength={400}
							{...register('message', { required: true })}
						/>
						<Button size="large">Wyślij</Button>
					</form>
				</Box>
			</div>
		</>
	);
};

export default WithFormLayout;
