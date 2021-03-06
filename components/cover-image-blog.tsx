import cn from 'classnames';
import Link from 'next/link';

type Props = {
	title: string;
	src: string;
	slug?: string;
};

const CoverImageBlog = ({ title, src, slug }: Props) => {
	const image = (
		<img
			src={src}
			alt={`Cover Image for ${title}`}
			className={cn('shadow-small', {
				'hover:shadow-medium transition-shadow duration-200': slug
			})}
		/>
	);
	return (
		<div className='-mx-5 sm:mx-0'>
			{slug ? (
				<Link as={`/blogs/${slug}`} href='/blogs/[slug]'>
					<a aria-label={title}>{image}</a>
				</Link>
			) : (
				image
			)}
		</div>
	);
};

export default CoverImageBlog;
