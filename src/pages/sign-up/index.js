import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  useToast,
  FormLabel,
  FormControl,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react'
import { SignUpWrapper } from './style'
import * as yup from 'yup'
import * as auth from '../../db/auth'

function SignUp() {
  const toast = useToast()
  const schema = yup.object().shape({
    email: yup.string().required(),
    password: yup.string().required().min(8),
  })

  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  })

  const onSubmit = async (values) => {
    try {
      const { email, password } = values
      await auth.createUserWithEmailAndPassword(email, password)
      toast({
        title: 'Account created.',
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
    <SignUpWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
        <FormControl className="form-controller" isInvalid={errors.email}>
          <FormLabel>Email</FormLabel>
          <Input placeholder="Email" {...register('email')} />
          <FormErrorMessage>{errors.email?.message}</FormErrorMessage>
        </FormControl>
        <FormControl className="form-controller" isInvalid={errors.password}>
          <FormLabel>Password</FormLabel>
          <Input
            type="password"
            placeholder="Password"
            autoComplete="off"
            {...register('password')}
          />
          <FormErrorMessage>{errors.password?.message}</FormErrorMessage>
        </FormControl>
        <FormControl className="form-controller" isInvalid={errors.phone}>
          <FormLabel>Phone</FormLabel>
          <Input placeholder="Phone" {...register('phone')} />
          <FormErrorMessage>{errors.phone?.message}</FormErrorMessage>
        </FormControl>
        <Button type="submit" colorScheme="teal">
          Sign Up
        </Button>
      </form>
    </SignUpWrapper>
  )
}

export default SignUp
