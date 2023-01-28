import { AuthForm } from "components/modules";
import { render, screen, waitFor } from "@testing-library/react";
import user from "@testing-library/user-event";
import { Formik, FormikHelpers, FormikProps } from "formik";
import { AuthValues } from "types/components/templates";
import { authValidator as validationSchema } from "validators/auth/auth.validator";
import { BrowserRouter } from "react-router-dom";

describe("Auth form", () => {
  let onSubmit: (
    values: AuthValues | undefined,
    { setSubmitting }: FormikHelpers<AuthValues>
  ) => Promise<void>;

  beforeEach(() => {
    const initialValues: AuthValues = {
      username: "",
      password: "",
    };

    onSubmit = jest.fn();

    render(
      <Formik
        initialValues={initialValues}
        onSubmit={onSubmit}
        validationSchema={validationSchema}
      >
        {(formik: FormikProps<AuthValues>) => {
          return <AuthForm formik={formik} isSignUp={true} />;
        }}
      </Formik>,
      { wrapper: BrowserRouter }
    );
  });

  it("User is able to type into inputs", async () => {
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);

    user.type(usernameInput, "nikita");
    user.type(passwordInput, "password");

    await waitFor(() => {
      expect((usernameInput as HTMLInputElement).value).toBe("nikita");
      expect((passwordInput as HTMLInputElement).value).toBe("password");
    });
  });

  it("The form is being submitted with correct values", async () => {
    const usernameInput = screen.getByPlaceholderText(/username/i);
    const passwordInput = screen.getByPlaceholderText(/password/i);
    const btn = screen.getByRole("button", { name: /submit/i });

    user.type(usernameInput, "nikita");
    user.type(passwordInput, "password");
    user.click(btn);

    await waitFor(() => {
      expect(onSubmit).toHaveBeenCalledWith(
        {
          password: "password",
          username: "nikita",
        },
        expect.anything()
      );
    });
  });
});
