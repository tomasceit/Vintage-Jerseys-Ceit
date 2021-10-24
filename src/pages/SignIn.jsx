import * as React from "react";
import LogInForm from "../components/LogInForm/LogInForm"
import LoadingIcon from '../components/LoadingIcon/LoadingIcon'

const SignIn = () => {
  const [loading, setLoading] = React.useState(true)
  React.useEffect(() => {
    setTimeout(() => {
      setLoading(false)
    }, 1000)
  }, [])
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
