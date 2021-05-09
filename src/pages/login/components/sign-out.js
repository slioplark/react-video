import { useToast, Button } from '@chakra-ui/react'

import * as auth from '../../../db/auth'

function SignOut() {
  const toast = useToast()

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
    <Button w="100%" type="submit" colorScheme="teal" onClick={signOut}>
      Log Out
    </Button>
  )
}

export default SignOut
