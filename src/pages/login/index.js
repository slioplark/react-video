import { FormControl, FormLabel, Input, Button } from "@chakra-ui/react";
import { LoginWrapper } from './style'

function Login() {
  return (
    <LoginWrapper>
      <FormControl id="account" isRequired>
        <FormLabel>Account</FormLabel>
        <Input placeholder="Account" />
      </FormControl>
      <FormControl id="password" isRequired>
        <FormLabel>Password</FormLabel>
        <Input type="password" placeholder="Password" />
      </FormControl>
      <Button
        mt={2}
        type="submit"
        colorScheme="teal"
      >
        Submit
      </Button>
    </LoginWrapper>
  );
}

export default Login;