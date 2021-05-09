import { useContext } from 'react'
import { UserContext } from '../../../store/userContext'

import {
  useToast,
  FormLabel,
  FormControl,
  Text,
  Button,
} from '@chakra-ui/react'
import { SignOutWrapper } from '../style'

import * as auth from '../../../db/auth'

function SignOut() {
  const toast = useToast()
  const { user } = useContext(UserContext)

  const signOut = async () => {
    try {
      await auth.signOut()
    } catch (err) {
      toast({
        title: err.message,
        status: 'error',
        isClosable: true,
      })
    }
  }

  return (
    <SignOutWrapper>
      <FormControl className="form-controller">
        <FormLabel>Email：</FormLabel>
        <Text>{user.email}</Text>
      </FormControl>
      <Button w="100%" type="submit" colorScheme="teal" onClick={signOut}>
        Log Out
      </Button>
    </SignOutWrapper>
  )
}

export default SignOut
