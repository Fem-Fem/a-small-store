import Layout from '../components/MyLayout';
import { Formik } from 'formik';
import {useSelector, useDispatch} from 'react-redux';

export default function Login() {
	const users = useSelector(state => state.users.users);

		for(var i in users) {
			console.log(users[i])
			console.log(users)
			console.log(Object.keys(users)[0])
			console.log(i)
		}
	function Verify(email, password) {
		
		const usernames = Object.keys(users);

		for(var i in users) {
			console.log(users[i])
		}

		if (usernames.includes(email)) {
			console.log(usernames)
			if (users[email] == "password") {
				return true;
			}
		}
		return false;
	}

	const dispatch = useDispatch();
	return (
		<Layout>
			<div>
				<Formik
					initialValues={{email: '', password: ''}}
					validate={values => {
						const errors = {};
						if (!values.email) {
							errors.email = 'Required'
						} else if (!values.password) {
							errors.password = 'Required'
						} else if (!Verify(values.email, values.password)) {
							errors.verify = "Not a user"
						}
						console.log(errors)
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(false)
						}, 400);
					}}
				>
				{({
					values,
					errors,
					touched,
					handleChange,
					handleBlur,
					handleSubmit,
					isSubmitting,
				}) => (
					<form onSubmit={handleSubmit}>
						<input
							type="email"
							name="email"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.email}
						/>
						<input
							type="password"
							name="password"
							onChange={handleChange}
							onBlur={handleBlur}
							value={values.password}
						/>
						<button type="submit" onSubmit={() => dispatch({type: 'LOG_IN', payload: [values.email, values.password]})}>
							Log In
						</button>
					</form>
				)}
				</Formik>
			</div>
		</Layout>
	);
}