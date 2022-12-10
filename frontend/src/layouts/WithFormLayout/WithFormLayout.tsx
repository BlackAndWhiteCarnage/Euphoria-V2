/**
 * External dependencies
 */
import { FC, PropsWithChildren } from 'react';
import { useForm } from 'react-hook-form';
import classnames from 'classnames';
import emailjs from 'emailjs-com';

/**
 * Internal dependencies
 */
import { Box, Button } from 'elements';
import { useUser } from '@auth0/nextjs-auth0';
import { email } from 'config/patterns';
import toast from 'react-hot-toast';
import classes from './WithFormLayout.module.scss';

const WithFormLayout: FC<PropsWithChildren> = ({ children }) => {
	const { user, isLoading } = useUser();

	const {
		register,
		handleSubmit,
		reset,
		formState: { errors },
	} = useForm();
	const onSubmit = (_: any, e: any) => {
		const config = {
			duration: 4000,
		};

		emailjs
			.sendForm(
				process.env.NEXT_PUBLIC_EMAILJS_SERVICE!,
				process.env.NEXT_PUBLIC_EMAILJS_TEMPLATE!,
				e.target,
				process.env.NEXT_PUBLIC_EMAILJS_USER!
			)
			.then(
				() => {
					toast.success(
						'Email został wysłany, odpowiem jak tylko go zobaczę 🥰',
						config
					);

					reset();
				},
				() => {
					toast.error(
						'Coś poszło nie tak, spróbuj wysłać maila później bądź skontaktuj się ze mną bezpośrenio na weronikarepsch@gmail.com',
						config
					);
				}
			);
	};

	return (
		<>
			{children}
			<div className={classes.formWrap}>
				<h3 className={classes.header}>
					Nie znalazłeś tego czego szukałeś lub masz pytania?{' '}
					<span className={classes.decorator}>Pisz śmiało!</span>
				</h3>
				{!isLoading && (
					<Box>
						<form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
							<label htmlFor="email" className={classes.label}>
								Email
							</label>
							<input
								id="email"
								type="text"
								// @ts-ignore
								value={user && user.email}
								className={classnames(classes.input, {
									[classes['has-error']]: errors.email,
									[classes['is-disabled']]: user?.email,
								})}
								{...register('email', {
									required: true,
									pattern: email,
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
				)}
			</div>
		</>
	);
};

export default WithFormLayout;
