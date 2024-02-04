import React from 'react'
import { Header } from '../components'
import { Button } from '../components/Button/Button'
import { useGlobalProvider } from '../core/GlobalContext'

const Home: React.FC = () => {

    return (
        <>
           <Header title={""} />
           <Button
           variant='contained'
           sx={{ mt: 10 }}
           >
            Submit
           </Button>
        </>
    )
}

export default Home