/**
 * Internal dependencies
 */
import { useStateContext } from 'contexts/CartContext';

const useIsFavorite = (slug: string) => {
	const { favorites } = useStateContext();

	if (favorites.length < 1) return false;

	return favorites.find((el: string) => el === slug);
};

export default useIsFavorite;
