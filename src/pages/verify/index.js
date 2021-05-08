import { useState, useEffect } from 'react'
import * as auth from '../../db/auth'
import { VerifyWrapper } from './style'
import {
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
} from '@chakra-ui/react'

function Verify() {
  const params = new URLSearchParams(window.location.search)
  const mode = params.get('mode')
  const oobCode = params.get('oobCode')

  const [type, setType] = useState(mode)
  const [message, setMessage] = useState()

  useEffect(() => {
    switch (type) {
      case 'verifyEmail':
        verifyEmail()
        break
      default:
        break
    }
  }, [])

  const verifyEmail = async () => {
    try {
      const res = await auth.verifyEmail(oobCode)
      setType(res)
    } catch (err) {
      setType('error')
      setMessage(err.message)
    }
  }

  const renderType = (type) => {
    switch (type) {
      case 'error':
        return (
          <Alert
            status="error"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertDescription mt={4} maxWidth="sm">
              {message}
            </AlertDescription>
          </Alert>
        )
      case 'verifyEmailSuccess':
        return (
          <Alert
            status="success"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Email Verification Successful!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Your account is successfully being created. Please proceed to the
              next step.
            </AlertDescription>
          </Alert>
        )
      default:
        return (
          <Alert
            status="info"
            variant="subtle"
            flexDirection="column"
            alignItems="center"
            justifyContent="center"
            textAlign="center"
            height="200px"
          >
            <AlertIcon boxSize="40px" mr={0} />
            <AlertTitle mt={4} mb={1} fontSize="lg">
              Loading......
            </AlertTitle>
          </Alert>
        )
    }
  }

  return <VerifyWrapper>{renderType(type)}</VerifyWrapper>
}

export default Verify
