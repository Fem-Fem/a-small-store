import Layout from "../components/MyLayout";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const dispatch = useDispatch();
  return (
    <Layout>
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {
              email: "default",
              password: "default",
            };
            if (!values.email) {
              errors.email = "Required";
            } else if (!values.password) {
              errors.password = "Required";
            }
            console.log(errors);
            if (errors.email == "default" && errors.password == "default") {
              return {};
            }
            return errors;
          }}
          onSubmit={(values, {}) => {
            console.log(values);
            dispatch({
              type: "ADD_USER",
              username: values.email,
              password: values.password,
            });
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
              <button type="submit">Sign Up</button>
            </form>
          )}
        </Formik>
      </div>
    </Layout>
  );
}
