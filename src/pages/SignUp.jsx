import * as React from 'react'
import SignUpForm from '../components/SignUpForm/SignUpForm'
import LoadingIcon from '../components/LoadingIcon/LoadingIcon'
import useLoading from "../hooks/useLoading"

const SignUp = () => {
  const loading = useLoading();
  if (loading) {
    return <LoadingIcon />
  } else {
    return (
      <>
        <SignUpForm />
      </>
    )
  }
}

export default SignUp
