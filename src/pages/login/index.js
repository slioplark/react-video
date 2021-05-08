import { Link, useHistory } from 'react-router-dom'
import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  useToast,
  useDisclosure,
  FormControl,
  FormErrorMessage,
  Text,
  Input,
  Button,
  Divider,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { LoginWrapper } from './style'
import * as yup from 'yup'
import * as auth from '../../db/auth'

function Login() {
  const toast = useToast()
  const history = useHistory()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required().min(8),
  })

  const {
    handleSubmit,
    getValues,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const logIn = async () => {
    try {
      const { email, password } = getValues()
      const user = await auth.signIn(email, password)
      if (!user.emailVerified) throw new Error('Please verify your email')
      history.push('/react-video')
    } catch (err) {
      toast({
        title: err.message,
        status: 'error',
        isClosable: true,
      })
    }
  }

  const resetPassword = async () => {
    const { resetPasswordEmail } = getValues()
    try {
      await auth.sendPasswordResetEmail(resetPasswordEmail)
      onClose()
      toast({
        title: 'Reset Link Sent to Email',
        status: 'success',
        isClosable: true,
      })
    } catch (err) {
      toast({
        title: err.message,
        status: 'error',
        isClosable: true,
      })
    }
  }

  return (
    <>
      {/* login */}
      <LoginWrapper>
        <form onSubmit={handleSubmit(logIn)}>
          <FormControl className="form-controller" isInvalid={errors.email}>
            <Input placeholder="Email" {...register('email')} />
            <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
          </FormControl>
          <FormControl className="form-controller" isInvalid={errors.password}>
            <Input
              type="password"
              placeholder="Password"
              autoComplete="off"
              {...register('password')}
            />
            <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
          </FormControl>
          <Button w="100%" type="submit" colorScheme="teal">
            Log In
          </Button>
        </form>
        <Text className="text" onClick={onOpen}>
          Forgot password?
        </Text>
        <Divider />
        <Link to="/react-video/signUp">
          <Button colorScheme="teal" variant="outline">
            Free Sign Up
          </Button>
        </Link>
      </LoginWrapper>
      {/* modal */}
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Forgot Password</ModalHeader>
          <ModalCloseButton />
          <Text px={6} pb={4}>
            Please enter your email:
          </Text>
          <ModalBody pb={6}>
            <FormControl isInvalid={errors.resetPasswordEmail}>
              <Input placeholder="Email" {...register('resetPasswordEmail')} />
              <FormErrorMessage>
                {errors.resetPasswordEmail?.message}
              </FormErrorMessage>
            </FormControl>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="teal" onClick={resetPassword}>
              Reset Password
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  )
}

export default Login
