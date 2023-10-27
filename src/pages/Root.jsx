import { Outlet } from 'react-router-dom';
import MainNavigation from '../components/MainNavigation';

const RootLayout = function (props) {
	return (
		<>
			<MainNavigation />
			<main className='content'>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
