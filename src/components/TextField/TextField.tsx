import { TextField, TextFieldProps } from "@mui/material";

type Props = {
  onChange:
    | React.ChangeEventHandler<HTMLInputElement | HTMLTextAreaElement>
    | undefined;
} & TextFieldProps;

export const BasicTextField: React.FC<Props> = ({ onChange, ...props }) => {
  return (
    <>
      <TextField {...props} onChange={onChange} />
    </>
  );
};
