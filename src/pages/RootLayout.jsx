import { Outlet } from 'react-router';
import MainNavigation from '../components/MainNavigation';

const RootLayout = function (props) {
	return (
		<>
			<MainNavigation />
			<main className='main container'>
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
