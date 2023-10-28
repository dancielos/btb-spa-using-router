import { Outlet, useNavigation } from 'react-router';
import MainNavigation from '../components/MainNavigation';

const RootLayout = function (props) {
	const navigation = useNavigation();

	return (
		<>
			<MainNavigation />
			<main className='main container'>
				{navigation.state === 'loading' && <p>Loading...</p>}
				<Outlet />
			</main>
		</>
	);
};

export default RootLayout;
