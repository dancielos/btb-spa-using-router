import { useRouteLoaderData } from 'react-router';
import EventForm from '../components/EventForm';

const EditEventPage = function (props) {
	const data = useRouteLoaderData('event-detail');
	// const event = data.event;

	return <EventForm event={data.event} method='PATCH' />;
};

export default EditEventPage;
