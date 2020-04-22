import Layout from '../components/MyLayout';
import { Formik } from 'formik';
import {useSelector, useDispatch} from 'react-redux';

export default function Login() {
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
						}
						return errors;
					}}
					onSubmit={(values, { setSubmitting }) => {
						setTimeout(() => {
							alert(JSON.stringify(values, null, 2));
							setSubmitting(true)
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
						<button type="submit" onClick={() => dispatch({type: 'ADD_USER', payload: [values.email, values.password]})}>
							Sign Up
						</button>
					</form>
				)}
				</Formik>
			</div>
		</Layout>
	);
}