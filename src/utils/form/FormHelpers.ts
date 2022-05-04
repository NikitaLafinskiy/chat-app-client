import {
  IMessage,
  IMessageWithFile,
  MessagePayload,
} from "types/models/IMessage";

export class FormHelpers {
  static convertToForm(state: any): { payload: FormData } {
    const fd = new FormData();

    for (let i in state) {
      fd.append(i, state[i]);
    }

    return { payload: fd };
  }

  static createMessagePayload(
    values: IMessageWithFile | IMessage,
    file?: File
  ): MessagePayload {
    if (file) {
      const allValues = { ...values, file };
      const { payload } = this.convertToForm(allValues);
      return payload;
    }
    return values;
  }
}
