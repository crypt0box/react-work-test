import { TextField, TextFieldProps } from '@mui/material';

type MuiTextFieldProps = TextFieldProps;

export const MuiTextField: React.FC<MuiTextFieldProps> = ({ ...props }) => {
  return <TextField {...props} />;
};
