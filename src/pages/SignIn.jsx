import * as React from "react";
import LogInForm from "../components/LogInForm/LogInForm"
import LoadingIcon from '../components/LoadingIcon/LoadingIcon'
import useLoading from "../hooks/useLoading"

const SignIn = () => {
  const loading = useLoading();
  if (loading) {
    return <LoadingIcon />
  } else {
    return (
      <>
        <LogInForm />
      </>
    )
  }
}

export default SignIn
