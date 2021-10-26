import * as React from 'react'

const useLoading = () => {
    const [loading, setLoading] = React.useState(true)
    React.useEffect(() => {
        setTimeout(() => {
            setLoading(false)
        }, 1000)
    }, [])
    return loading;
}

export default useLoading
