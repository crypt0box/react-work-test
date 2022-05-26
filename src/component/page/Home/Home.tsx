import { useEffect } from 'react';
import styled from 'styled-components';
import { MuiButton } from '@/component/ui/Button';
import { MuiTextField } from '@/component/ui/TextField';
import { Flex } from '@/component/ui/Flex';
import { RhfTextArea } from '@/component/ui/TextArea';
import { useDefaultForm } from '@/component/common/hook';

type Form = {
  userName: string;
};

const StyledButton = styled(MuiButton)`
  background-color: red;
`;

export const Home = () => {
  const { control, watch } = useDefaultForm<Form>({
    defaultValues: {
      userName: '',
    },
  });

  useEffect(() => {
    const subscription = watch((value, { name, type }) => console.log(value, name, type));
    return () => subscription.unsubscribe();
  }, [watch]);
  return (
    <>
      <h2>Home</h2>
      <Flex flexDirection="column" gap="16px">
        <MuiTextField size="small" helperText="aaa" />
        <StyledButton variant="outlined" onClick={() => console.log(watch())}>
          ボタン
        </StyledButton>
        <RhfTextArea name="userName" control={control} />
      </Flex>
    </>
  );
};
