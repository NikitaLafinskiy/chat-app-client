import { Form, Input, Button, FileInput } from "components/elements";
import { Formik, FormikProps, FormikHelpers } from "formik";
import { MessageFormValues } from "types/components/modules";
import { messageFormValidator } from "validators/chat/chat.validator";
import { useState } from "react";
import { useAppSelector, useAppDispatch } from "hooks/redux.hooks";
import {
  IMessage,
  IMessageFromServer,
  MessagePayload,
} from "types/models/IMessage";
import { ChatActions } from "store/chat/ActionCreators";
import { SocketType } from "types/socket";
import { FormHelpers } from "utils/form/FormHelpers";
import "./MessageForm.scss";
import { chatSlice } from "store/chat/ChatSlice";

function MessageForm() {
  const { user } = useAppSelector((state) => state.authReducer);
  const { socket } = useAppSelector((state) => state.socketReducer);
  const { currentConversation } = useAppSelector((state) => state.chatReducer);
  const dispatch = useAppDispatch();

  const [file, setFile] = useState<{
    initialFile: File;
    convertedFile: string;
  }>();

  const initialValues = {
    message: "",
  };

  const onSubmit = (
    values = initialValues,
    { setSubmitting }: FormikHelpers<MessageFormValues>
  ) => {
    const allValues = {
      body: values.message,
      conversation: currentConversation,
      from: user,
    };

    const { createMessagePayload } = FormHelpers;
    const payload: MessagePayload = file?.initialFile
      ? createMessagePayload(allValues, file.initialFile)
      : createMessagePayload(allValues);

    dispatch(ChatActions.sendMessage(payload, socket as SocketType));

    if (!file?.initialFile) {
      const msg = payload as IMessage;
      dispatch(
        chatSlice.actions.updateMessage({
          ...msg,
          from: msg.from.id,
        } as IMessageFromServer)
      );
    }
    values.message = "";

    setSubmitting(false);
  };

  return (
    <Formik
      onSubmit={onSubmit}
      initialValues={initialValues}
      validationSchema={file ? null : messageFormValidator}
    >
      {(formik: FormikProps<MessageFormValues>) => {
        return (
          <Form className={`modules__message-form`}>
            <Input placeholder='Message' name='message' autoComplete='off' />
            <div>
              <FileInput setFile={setFile} />
              <Button
                type='submit'
                disabled={!formik.dirty || formik.isSubmitting}
              >
                <img src='/images/send_icon.svg' />
              </Button>
            </div>
          </Form>
        );
      }}
    </Formik>
  );
}

export default MessageForm;
