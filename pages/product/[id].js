import Layout from '../../components/MyLayout';
import { useRouter } from 'next/router';
import ProductDetails from '../../components/ProductDetails';
import { connect } from 'react-redux';
import {useSelector, useDispatch} from 'react-redux';


function ProductInfo() {

	const router = useRouter();
	const products = useSelector(state => state.products.products);

	console.log(products.find( ({title}) => title === router.query.id))
	console.log(products)

	return (
		<Layout>
			<h1>{router.query.id}</h1>
			<p>This is a specific item</p>
		</Layout>
	);
}

export default ProductInfo;