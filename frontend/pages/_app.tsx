/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { FC, ComponentType } from 'react';
import { Provider, createClient } from 'urql';
import { UserProvider } from '@auth0/nextjs-auth0';

/**
 * Internal dependencies
 */
import 'styles/index.scss';
import { MainLayout, WithNavigationLayout } from 'layouts';
import { StateContext } from 'contexts/CartContext';
import firebase from 'utils/initFirebase';

firebase();

const client = createClient({ url: process.env.NEXT_PUBLIC_GRAPHQL as string });

type ComponentWithLayout = AppProps & {
	Component: AppProps['Component'] & {
		PageLayout?: ComponentType;
	};
};

const App: FC<ComponentWithLayout> = ({ Component, pageProps }) => {
	return (
		<UserProvider>
			<StateContext>
				<MainLayout>
					<WithNavigationLayout>
						<Provider value={client}>
							{Component.PageLayout ? (
								<Component.PageLayout>
									<Component {...pageProps} />
								</Component.PageLayout>
							) : (
								<Component {...pageProps} />
							)}
						</Provider>
					</WithNavigationLayout>
				</MainLayout>
			</StateContext>
		</UserProvider>
	);
};

export default App;
