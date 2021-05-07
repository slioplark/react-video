import { useForm } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'
import {
  useToast,
  FormControl,
  FormLabel,
  FormErrorMessage,
  Input,
  Button,
} from '@chakra-ui/react'
import { LoginWrapper } from './style'
import * as yup from 'yup'
import db from '../../db'

function Login() {
  const auth = db.auth()
  const toast = useToast()
  const schema = yup.object().shape({
    account: yup.string().required(),
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
      const user = await auth.signInWithEmailAndPassword(
        values.account,
        values.password
      )
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
        <FormControl className="form-controller" isInvalid={errors.account}>
          <Input placeholder="Email" {...register('account')} />
          <FormErrorMessage>{errors.account?.message}</FormErrorMessage>
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
          Submit
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
