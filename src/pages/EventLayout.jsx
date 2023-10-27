import { Outlet } from 'react-router';
import EventsNavigation from '../components/EventsNavigation';

const EventLayout = function (props) {
	return (
		<>
			<EventsNavigation />
			<main className='main'>
				<Outlet />
			</main>
		</>
	);
};

export default EventLayout;
