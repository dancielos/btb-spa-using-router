import MainNavigation from '../components/MainNavigation';

const ErrorPage = function (props) {
	return (
		<>
			<MainNavigation />
			<main className='content'>
				<h1>Error 404: Page not found!</h1>
			</main>
		</>
	);
};

export default ErrorPage;
