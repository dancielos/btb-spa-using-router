import { useParams } from 'react-router-dom';

const ProductDetails = function (props) {
	const params = useParams();
	return (
		<>
			<h1>Product details</h1>
			<p>{params.productName}</p>
		</>
	);
};

export default ProductDetails;
