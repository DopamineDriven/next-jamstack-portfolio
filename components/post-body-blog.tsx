import markdownStyles from 'components/markdown-styles.module.css';
import ReactMarkdown from 'react-markdown/with-html';

type Props = {
	content: string;
};

const PostBodyBlog = ({ content }: Props) => {
	return (
		<div className='max-w-2xl mx-auto content-center text-left items-center justify-center align-middle flex flex-grow-0 sm:max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl'>
			<ReactMarkdown
				className={markdownStyles['markdown']}
				escapeHtml={false}
				source={content}
			/>
		</div>
	);
};

export default PostBodyBlog;
