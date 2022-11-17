/**
 * External dependencies
 */
import { useRouter } from 'next/router';
import { StickyContainer, Sticky } from 'react-sticky';

/**
 * Internal dependencies
 */
import { Button, Loader, Price, Header } from 'elements';
import { useGetProduct } from 'hooks';
import { getNestedProductData, createImagesArray } from 'utils';
import { ImagesPreview } from 'fragments';
import classnames from 'classnames';

import classes from './index.module.scss';

const PantiesProductPreview = () => {
	const router = useRouter();
	const { slug } = router.query;

	const { data, fetching, error } = useGetProduct(slug as any);

	if (fetching) return <Loader />;
	if (error) return <p>Error: {error.message}</p>;

	const { title, price, extras, images } = getNestedProductData(data);

	return (
		<div className={classes.wrapper}>
			<div className={classes.images}>
				<Header text={title} />
				<ImagesPreview images={createImagesArray(images, title)} />
			</div>
			<StickyContainer className={classes.sticky}>
				<Sticky>
					{({ style, isSticky }) => (
						<div
							className={classnames(classes.aside, {
								[classes['is-sticky']]: isSticky,
							})}
							style={style}
						>
							<p className={classes.description}>
								Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
								sodales sodales tristique. Integer et ultricies ipsum, id
								viverra ligula. Vivamus condimentum quam efficitur nibh luctus,
								nec hendrerit risus porta. Sed consequat urna imperdiet,
								malesuada felis id, dapibus eros. Suspendisse sed nunc nec
								tellus mollis mattis. Aliquam rhoncus risus ante, a lobortis
								turpis condimentum id. Quisque porta purus vel libero luctus
								venenatis. Morbi vitae consequat lacus, quis porttitor tortor.
								Nulla luctus justo et nibh molestie, quis viverra arcu tempor.
								Mauris condimentum pharetra magna, eu sollicitudin est accumsan
								vel. Curabitur vel hendrerit augue, at hendrerit tellus.{' '}
							</p>
							<Price price={price} />
							<Button>
								<>Dodaj do koszyka {extras.data && 'i wybierz dodatki'}</>
							</Button>
						</div>
					)}
				</Sticky>
			</StickyContainer>
		</div>
	);
};

export default PantiesProductPreview;
