import { Formik, FormikProps, FormikHelpers } from "formik";
import { AuthValues } from "types/components/templates.d";
import { authValidator as validationSchema } from "validators/auth/auth.validator";
import { AuthProps } from "types/components/templates.d";
import { AuthForm } from "components/modules";
import { AuthActions } from "store/auth/ActionCreators";
import { useNavigate } from "react-router-dom";
import { useAppDispatch } from "hooks/redux.hooks";
import { AuthWrapper } from "components/layouts";

function Auth({ isSignUp }: AuthProps) {
  const nav = useNavigate();
  const dispatch = useAppDispatch();

  const initialValues: AuthValues = {
    username: "",
    password: "",
  };

  const onSubmit = async (
    values = initialValues,
    { setSubmitting }: FormikHelpers<AuthValues>
  ) => {
    try {
      const { username, password } = values;
      isSignUp
        ? await dispatch(AuthActions.login(username, password))
        : await dispatch(AuthActions.register(username, password));

      setSubmitting(false);

      if (localStorage.getItem("accessUUID")) {
        console.log("redirecting");
        nav("/chat");
      }
    } catch (err) {}
  };

  return (
    <AuthWrapper>
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik: FormikProps<AuthValues>) => {
          return <AuthForm formik={formik} isSignUp={isSignUp} />;
        }}
      </Formik>
    </AuthWrapper>
  );
}

export default Auth;
