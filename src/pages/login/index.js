import { useForm } from 'react-hook-form';
import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { LoginWrapper } from './style';

function Login() {
  const { handleSubmit, register } = useForm();

  const onSubmit = (values) => {
    console.log(values);
  }

  return (
    <LoginWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl isRequired>
          <FormLabel>Account</FormLabel>
          <Input
            placeholder="Account"
            {...register('account')}
          />
        </FormControl>
        <FormControl isRequired>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            autoComplete="off"
            {...register('password')}
          />
        </FormControl>
        <Button
          mt={2}
          type="submit"
          colorScheme="teal"
        >
          Submit
      </Button>
      </form>
    </LoginWrapper>
  );
}

export default Login;