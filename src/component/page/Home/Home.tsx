import { MuiButton } from '@/component/ui/Button';
import { MuiTextField } from '@/component/ui/TextField';
import { Flex } from '@/component/ui/Flex';

export const Home = () => {
  return (
    <>
      <h2>Home</h2>
      <Flex gap="16px">
        <MuiTextField size="small" helperText="aaa" />
        <MuiButton variant="outlined">ボタン</MuiButton>
      </Flex>
    </>
  );
};
