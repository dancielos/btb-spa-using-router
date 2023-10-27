import { useParams } from 'react-router';

const EventDetailPage = function (props) {
	const params = useParams();
	return (
		<>
			<h1>Event Details Page</h1>
			<p>{params.eventSlug}</p>
		</>
	);
};

export default EventDetailPage;
