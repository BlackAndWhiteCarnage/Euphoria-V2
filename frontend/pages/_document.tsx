/**
 * External dependencies
 */
import { FC } from 'react';
import { DocumentProps, Head, Html, Main, NextScript } from 'next/document';

const Document: FC<DocumentProps> = () => (
	<Html lang="pl">
		<Head>
			<link rel="shortcut icon" href="/logo-fav.svg" />
			<meta
				name="description"
				content="Euphoria - Noszona używana bielizna | Majtki | Majteczki | Skarpetki | Rajstopy | Pończochy | Fetysz"
			/>
			<meta name="robots" />
			<meta
				name="google-site-verification"
				content="QgzjzuKrkXsiQBKKEDMFBNm4vbp4oJeSAThIh6RV2L4"
			/>
		</Head>
		<body>
			<Main />
			<NextScript />
		</body>
	</Html>
);

export default Document;
