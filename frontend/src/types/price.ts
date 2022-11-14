type DiscountedPrice = {
	discount: number;
	isFree?: never;
	price: number;
};

type FreePrice = {
	discount?: never;
	isFree: boolean;
	price: number;
};

type NormalPrice = {
	discount?: never;
	isFree?: never;
	price: number;
};

export type PriceProps = NormalPrice | FreePrice | DiscountedPrice;
