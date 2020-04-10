import Layout from '../components/MyLayout';
import { Formik } from 'formik';

export default function Index() {
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
						<button type="submit" disabled={isSubmitting}>
							Sign Up
						</button>
					</form>
				)}
				</Formik>
			</div>
		</Layout>
	);
}