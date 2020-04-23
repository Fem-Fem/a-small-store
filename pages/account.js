import Layout from '../components/MyLayout';
import {useSelector, useDispatch} from 'react-redux';
import {Title} from '../components/Format';

export default function Account() {
	function Show() {
		const this_user = useSelector(state => state.users.current_user);

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
			<Title>Account</Title>
			<Show />
		</Layout>
	);
}