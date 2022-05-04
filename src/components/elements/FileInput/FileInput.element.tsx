import { ElementHelpers } from "utils/elements/ElementsHelpers";
import { FileInputProps } from "types/components/elements";
import "./FileInput.scss";

function FileInput({ setFile, className, style, ...rest }: FileInputProps) {
  const handleFileUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files) {
      const initialFile = e.target.files[0];
      const convertedFile = URL.createObjectURL(initialFile);

      setFile({ convertedFile, initialFile });
      return;
    }
  };

  const classes = ElementHelpers.convertClass(
    "elements__file-input",
    className
  );

  return (
    <div style={style} className={classes}>
      <label htmlFor='elements__file-input'>
        <img alt='upload an image' src='/images/file_upload.svg' />
      </label>
      <input
        onChange={handleFileUpload}
        id='elements__file-input'
        type='file'
        {...rest}
      />
    </div>
  );
}

export default FileInput;
