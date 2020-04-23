import Layout from '../components/MyLayout';
import {useSelector, useDispatch} from 'react-redux';
import Product from '../components/Product';
import {Title, Item} from '../components/Format';

	function Show() {
		const this_cart = useSelector(state => state.cart.cart)
		const arr_prod = []
		const arr_quant = []
		let hash = {};
		for (let i = 0; i < this_cart.length; i++) {
			console.log(this_cart[i])
			console.log(this_cart[i].title)
			console.log(hash[this_cart[i]])
			if (hash[this_cart[i].title] == null) {
				hash[this_cart[i].title] = 1;
				arr_prod.push(this_cart[i])
				arr_quant.push(1)
			}
			else {
				hash[this_cart[i]] = hash[this_cart[i]] + 1;
				arr_quant[arr_prod.indexOf(this_cart[i])] = arr_quant[arr_prod.indexOf(this_cart[i])] + 1;
			}
		}
		console.log(arr_prod)
		return arr_prod.map(product => <Item><Product key={product} this_product={product}/> {arr_quant[arr_prod.indexOf(product)]}</Item>)

	}

export default function Cart() {
	return (
		<Layout>
			<Title>Cart</Title>
			<Show />
		</Layout>
	);
}