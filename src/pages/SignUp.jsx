import * as React from 'react'
import SignUpForm from '../components/SignUpForm/SignUpForm'
import LoadingIcon from '../components/LoadingIcon/LoadingIcon'

const SignUp = () => {
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
        <SignUpForm />
      </>
    )
  }
}

export default SignUp
