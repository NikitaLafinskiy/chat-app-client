import { Field, ErrorMessage, FieldProps } from "formik";

function ControllableInput() {
  const handleChange = () => {};
  return (
    <Field>
      {(field: FieldProps) => {
        return <input />;
      }}
    </Field>
  );
}

export default ControllableInput;
