import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import RootLayout from './pages/RootLayout';
import HomePage from './pages/HomePage';
import EventsPage from './pages/EventsPage';
import EventDetailPage from './pages/EventDetailPage';
import NewEventPage from './pages/NewEventPage';
import EditEventPage from './pages/EditEventPage';
import EventLayout from './pages/EventLayout';

const router = createBrowserRouter([
	{
		path: '/',
		element: <RootLayout />,
		children: [
			{ index: true, element: <HomePage /> },
			{
				path: '/events',
				element: <EventLayout />,
				children: [
					{ index: true, element: <EventsPage /> },
					{ path: ':eventSlug', element: <EventDetailPage /> },
					{ path: 'new', element: NewEventPage },
					{ path: ':eventSlug/edit', element: <EditEventPage /> },
				],
			},
		],
	},
]);

function App() {
	return <RouterProvider router={router}></RouterProvider>;
}

export default App;
