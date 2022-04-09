import { AuthFormProps } from 'types/components/modules';
import { Form, Input, Button, Header } from 'components/elements';

function AuthForm({ formik, isSignUp }: AuthFormProps) {
  return (
    <Form>
      <Header>{isSignUp ? 'Log in' : 'Sign up'}</Header>
      <Input name='username' placeholder='Input your username: ' />
      <Input name='password' placeholder='Input your password: ' />
      <Button type='submit' disabled={!formik.dirty || formik.isSubmitting}>
        Submit
      </Button>
    </Form>
  );
}

export default AuthForm;
