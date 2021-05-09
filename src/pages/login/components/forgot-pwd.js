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
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
} from '@chakra-ui/react'
import { ForgotPwdWrapper } from '../style'
import * as yup from 'yup'
import * as auth from '../../../db/auth'

function ForgotPwd() {
  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const schema = yup.object().shape({
    email: yup.string().required().email(),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (values) => {
    const { email } = values
    try {
      await auth.sendPasswordResetEmail(email)
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
    <ForgotPwdWrapper>
      <Text className="text" onClick={onOpen}>
        Forgot password?
      </Text>
      <Modal isOpen={isOpen} onClose={onClose}>
        <ModalOverlay />
        <ModalContent>
          <form onSubmit={handleSubmit(onSubmit)}>
            <ModalHeader>Forgot Password</ModalHeader>
            <ModalCloseButton />
            <Text px={6} pb={4}>
              Please enter your email:
            </Text>
            <ModalBody pb={6}>
              <FormControl isInvalid={errors.email}>
                <Input placeholder="Email" {...register('email')} />
                <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
              </FormControl>
            </ModalBody>
            <ModalFooter>
              <Button type="submit" colorScheme="teal">
                Reset Password
              </Button>
            </ModalFooter>
          </form>
        </ModalContent>
      </Modal>
    </ForgotPwdWrapper>
  )
}

export default ForgotPwd
