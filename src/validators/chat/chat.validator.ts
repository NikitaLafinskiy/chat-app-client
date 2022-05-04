import * as yup from "yup";

export const messageFormValidator = yup.object().shape({
  message: yup.string().required("").min(1).max(10000),
});
