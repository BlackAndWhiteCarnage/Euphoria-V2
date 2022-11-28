/**
 * External dependencies
 */
import {
	getFirestore,
	collection,
	getDocs,
	addDoc,
	doc,
	query,
	where,
	updateDoc,
} from 'firebase/firestore';
import { useUser } from '@auth0/nextjs-auth0';
import { useState, useEffect } from 'react';

/**
 * Internal dependencies
 */
import { CartItemType } from 'contexts/CartContext';

const useUserData = (cart: Array<CartItemType>, favorites: Array<string>) => {
	const initialUserData = null;
	const [firestoreUserId, setFirestoreUserId] = useState();
	const [userData, setUserData] = useState<any>(initialUserData);
	const { user, isLoading } = useUser();
	const database = getFirestore();
	const collectionRef = collection(database, 'usersData');

	const handleCreateNewUser = () => {
		const data = {
			cart: [],
			favorites: [],
			email: user?.email,
		};

		addDoc(collectionRef, data);
		setUserData(data);
	};

	const getUserData = async () => {
		if (!user) return;

		const dbQuery = query(
			collection(database, 'usersData'),
			where('email', '==', user.email)
		);

		const dbSnapshot = await getDocs(dbQuery);

		!dbSnapshot.empty
			? dbSnapshot.forEach((result) => setUserData(result.data()))
			: handleCreateNewUser();

		getDocs(collectionRef).then((snapshoot) => {
			const data: Array<any> = [];

			snapshoot.docs.forEach((document) => {
				data.push({ ...document.data(), id: document.id });
			});

			const currentUser = data.find((element) => element.email === user.email);

			setFirestoreUserId(currentUser.id);
		});
	};

	useEffect(() => {
		!isLoading && getUserData();
		// eslint-disable-next-line
	}, [isLoading]);

	useEffect(() => {
		!isLoading &&
			firestoreUserId &&
			updateDoc(doc(database, 'usersData', firestoreUserId), {
				cart: JSON.parse(JSON.stringify(cart)).flat(),
			});
	}, [cart, isLoading, firestoreUserId, database]);

	useEffect(() => {
		!isLoading &&
			firestoreUserId &&
			updateDoc(doc(database, 'usersData', firestoreUserId), {
				favorites: JSON.parse(JSON.stringify(favorites)).flat(),
			});
	}, [favorites, isLoading, firestoreUserId, database]);

	return { userData, isLoading, database, firestoreUserId };
};

export default useUserData;
