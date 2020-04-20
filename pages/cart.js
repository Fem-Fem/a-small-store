import Layout from '../components/MyLayout';
import {useSelector, useDispatch} from 'react-redux';

export default function Cart() {
	const this_cart = useSelector(state => state.cart.cart)
	let hash = {}
	for (let i = 0; i < this_cart.length; i++) {
		if (hash[i] === null) {
			hash[i] = 1
		}
		else {
			hash[i] = hash[i] + 1
		}
	}
	return (
		<Layout>
		{this_cart.map(item => <div><div>{item.title}</div>
			<button>Remove from Cart</button>
			</div>)}
			<p>Cart</p>
		</Layout>
	);
}