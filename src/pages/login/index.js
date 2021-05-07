import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  useToast,
  FormControl,
  FormErrorMessage,
  Link,
  Input,
  Button,
  Divider,
} from '@chakra-ui/react'
import { LoginWrapper } from './style'
import * as yup from 'yup'
import * as auth from '../../db/auth'

function Login() {
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
      const user = await auth.signInWithEmailAndPassword(email, password)
      if (!user.emailVerified) throw new Error('Please verify your email')
      toast({
        title: 'Log in created.',
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
    <LoginWrapper>
      <form onSubmit={handleSubmit(onSubmit)}>
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
      <Link color="teal.500" href="#">
        Forgot password?
      </Link>
      <Divider />
      <Button colorScheme="teal" variant="outline">
        Free Sign Up
      </Button>
    </LoginWrapper>
  )
}

export default Login
