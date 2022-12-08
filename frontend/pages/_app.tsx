/**
 * External dependencies
 */
import type { AppProps } from 'next/app';
import { FC, ComponentType } from 'react';
import { Provider, createClient } from 'urql';
import { UserProvider } from '@auth0/nextjs-auth0';
import toast, { Toaster } from 'react-hot-toast';

/**
 * Internal dependencies
 */
import 'styles/index.scss';
import { MainLayout, WithFooterLayout, WithNavigationLayout } from 'layouts';
import { StateContext } from 'contexts/CartContext';
import firebase from 'utils/initFirebase';

firebase();

const client = createClient({ url: process.env.NEXT_PUBLIC_GRAPHQL as string });

type ComponentWithLayout = AppProps & {
	Component: AppProps['Component'] & {
		PageLayout?: any;
	};
};

const App: FC<ComponentWithLayout> = ({ Component, pageProps }) => (
	<UserProvider>
		<StateContext>
			<MainLayout>
				<WithNavigationLayout>
					<Provider value={client}>
						<Toaster
							toastOptions={{
								duration: 1000,
								style: {
									background: '#E6E6E6',
									color: '#1E1E1E',
									fontWeight: 'bold',
									textAlign: 'center',
								},
							}}
						/>
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

export default App;
