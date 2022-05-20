import { AuthFormProps } from "types/components/modules";
import { Form, Input, Button, Header, Anchor } from "components/elements";

function AuthForm({ formik, isSignUp }: AuthFormProps) {
  return (
    <Form>
      <Header>{isSignUp ? "Log in:" : "Sign up:"}</Header>
      <Input name='username' placeholder='Input your username: ' />
      <Input
        name='password'
        type='password'
        placeholder='Input your password: '
      />
      <Button type='submit' disabled={!formik.dirty || formik.isSubmitting}>
        Submit
      </Button>
      <Anchor to={`/${isSignUp ? "register" : "login"}`}>
        {isSignUp
          ? "Dont have an account yet? Sign up!"
          : "Already have an account? Log in!"}
      </Anchor>
    </Form>
  );
}

export default AuthForm;
