import Layout from '../components/MyLayout';
import {useSelector, useDispatch} from 'react-redux';

export default function Account() {
	function Show() {
		const this_product = useSelector(state => state.users.current_user);
		const isLoggedIn = this_product;
		console.log(this_product)

		if (isLoggedIn.length) {
			return (
				<div>
					<p>{this_product[0][0]}</p>
			 		<p>{this_product[0][1]}</p>
			 	</div>
			 	)
		}
		return <p>Log In</p>
	}

	return (
		<Layout>
			<p>Look at your profile information!</p>
			<Show />
		</Layout>
	);
}