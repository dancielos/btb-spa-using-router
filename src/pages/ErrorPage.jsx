import { useRouteError } from 'react-router';

import PageContent from '../components/PageContent';

const ErrorPage = function (props) {
	const error = useRouteError();

	let title = 'An error occurred!';
	let message = 'Something went wrong!';

	if (error.status === 500) message = JSON.parse(error.data).message;
	if (error.status === 404) {
		title = 'Not found!';
		message = 'Could not find resource or page.';
	}

	return (
		<PageContent title={title}>
			<p>{message}</p>
		</PageContent>
	);
};

export default ErrorPage;