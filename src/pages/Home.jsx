import { Link } from 'react-router-dom';

const Home = function (props) {
	return (
		<>
			<h1>My Homepage</h1>
			<p>
				<Link to='/products'>Products link</Link>
			</p>
		</>
	);
};

export default Home;
