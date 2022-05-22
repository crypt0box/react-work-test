import { FormHelperText, TextareaAutosize, TextareaAutosizeProps } from '@mui/material';

export type MuiTextAreaProps = TextareaAutosizeProps & {
  error?: string;
};

export const MuiTextArea: React.FC<MuiTextAreaProps> = ({ ...props }) => {
  return (
    <>
      <TextareaAutosize {...props} />
      {!!props.error && <FormHelperText error>{props.error}</FormHelperText>}
    </>
  );
};
