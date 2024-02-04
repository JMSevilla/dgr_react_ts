import { 
    useContext,
    createContext,
    useState
} from 'react'

type ContextProps = {
    jm: boolean
    setState: any
}

const Context = createContext<ContextProps>({
    jm: false,
    setState: false
})

export const GlobalProvider: React.FC<React.PropsWithChildren<{}>> = ({
    children
}) => {
    const [state, setState] = useState(false)
    return (
        <Context.Provider
        value={{
            jm: state, setState
        }}
        >{children}</Context.Provider>
    )
}

export const useGlobalProvider = () => {
    if(!Context){
        throw new Error('Global provider must be used.')
    }
    return useContext(Context)
}
