import { useState, useEffect } from 'react'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import { VerifyWrapper, FormWrapper } from './style'
import {
  Input,
  Alert,
  AlertIcon,
  AlertTitle,
  AlertDescription,
  Button,
  FormLabel,
  FormControl,
  FormErrorMessage,
} from '@chakra-ui/react'
import * as yup from 'yup'
import * as auth from '../../db/auth'

function Verify() {
  const params = new URLSearchParams(window.location.search)
  const mode = params.get('mode')
  const oobCode = params.get('oobCode')

  const schema = yup.object().shape({
    newPassword: yup.string().required().min(8),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

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
      await auth.verifyEmail(oobCode)
      setType('verifyEmailSuccess')
    } catch (err) {
      setType('error')
      setMessage(err.message)
    }
  }

  const resetPassword = async (values) => {
    try {
      const { newPassword } = values
      await auth.resetPassword(oobCode, newPassword)
      setType('resetPasswordSuccess')
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
      case 'resetPassword':
        return (
          <FormWrapper onSubmit={handleSubmit(resetPassword)}>
            <FormControl
              isRequired
              className="form-controller"
              isInvalid={errors.newPassword}
            >
              <FormLabel>New Password</FormLabel>
              <Input
                type="password"
                placeholder="New Password"
                {...register('newPassword')}
              />
              <FormErrorMessage>{errors.newPassword?.message}</FormErrorMessage>
            </FormControl>
            <FormControl
              isRequired
              className="form-controller"
              isInvalid={errors.confirmPassword}
            >
              <FormLabel>Confirm Password</FormLabel>
              <Input
                type="password"
                placeholder="Confirm Password"
                {...register('confirmPassword')}
              />
              <FormErrorMessage>
                {errors.confirmPassword?.message}
              </FormErrorMessage>
            </FormControl>
            <Button type="submit" colorScheme="teal">
              Reset
            </Button>
          </FormWrapper>
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
      case 'resetPasswordSuccess':
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
              Reset Password Successful!
            </AlertTitle>
            <AlertDescription maxWidth="sm">
              Please use your new password the next time you log in.
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
