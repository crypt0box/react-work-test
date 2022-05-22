import { useEffect } from 'react';
import { MuiButton } from '@/component/ui/Button';
import { MuiTextField } from '@/component/ui/TextField';
import { Flex } from '@/component/ui/Flex';
import { RhfTextArea } from '@/component/ui/TextArea';
import { useDefaultForm } from '@/component/common/hook';

type Form = {
  userName: string;
};

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
        <MuiButton variant="outlined" onClick={() => console.log(watch())}>
          ボタン
        </MuiButton>
        <RhfTextArea name="userName" control={control} />
      </Flex>
    </>
  );
};
