import Layout from '../components/MyLayout';
import {useSelector, useDispatch} from 'react-redux';

export default function Account() {
	function Show() {
		const this_user = useSelector(state => state.users.current_user);
		console.log(this_user)

		if (this_user) {
			return (
				<div>
					<p>Username: {Object.keys(this_user)}</p>
			 		<p>Password: {Object.values(this_user)}</p>
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