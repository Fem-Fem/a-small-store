import Layout from "../components/MyLayout";
import { Formik } from "formik";
import { useSelector, useDispatch } from "react-redux";

export default function Login() {
  const users = useSelector((state) => state.users.users);
  const dispatch = useDispatch();

  function Verify(email, password) {
    const usernames = Object.keys(users);

    if (usernames.includes(email)) {
      if (users[email] == password) {
        return true;
      }
    }
    return false;
  }

  return (
    <Layout>
      <div>
        <Formik
          initialValues={{ email: "", password: "" }}
          validate={(values) => {
            const errors = {
              email: "default",
              password: "default",
              verify: "default",
            };
            if (!values.email) {
              errors.email = "Required";
            } else if (!values.password) {
              errors.password = "Required";
            } else if (!Verify(values.email, values.password)) {
              errors.verify = "Not a user";
            }
            console.log(errors);
            if (
              errors.email == "default" &&
              errors.password == "default" &&
              errors.verify == "default"
            ) {
              return {};
            }
            return errors;
          }}
          onSubmit={(values, actions) => {
            console.log("HIT ON SUBMIT");
            console.log(values);
            dispatch({
              type: "LOG_IN",
              username: values.email,
              password: values.password,
            });
            console.log("HIT ON SUBMIT 2");
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
                Log In
              </button>
            </form>
          )}
        </Formik>
      </div>
    </Layout>
  );
}
