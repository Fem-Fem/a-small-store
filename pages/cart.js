import Layout from '../components/MyLayout';
import {useSelector, useDispatch} from 'react-redux';
import Product from '../components/Product';


	function Show() {
		const this_cart = useSelector(state => state.cart.cart)
		const arr_prod = []
		const arr_quant = []
		let hash = {};
		for (let i = 0; i < this_cart.length; i++) {
			if (hash[this_cart[i]] == null) {
				hash[this_cart[i]] = 1;
				arr_prod.push(this_cart[i])
				arr_quant.push(1)
			}
			else {
				hash[this_cart[i]] = hash[this_cart[i]] + 1;
				arr_quant[arr_prod.indexOf(this_cart[i])] = arr_quant[arr_prod.indexOf(this_cart[i])] + 1;
			}
		}

		return arr_prod.map(product => <div><Product key={product} this_product={product}/> {arr_quant[arr_prod.indexOf(product)]}</div>)
		// return <div>Hi</div>

	}

export default function Cart() {
	return (
		<Layout>
			<Show />
		</Layout>
	);
}