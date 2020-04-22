import Layout from '../components/MyLayout';
import {useSelector, useDispatch} from 'react-redux';

export default function Account() {
	function Show() {
		const this_user = useSelector(state => state.users.current_user);
		console.log(this_user)

		if (this_user) {
			return (
				<div>
					<p>{this_user.username}</p>
			 		<p>{this_user.password}</p>
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