import { createContext, ReactNode, useState } from 'react'


type UserContextProps = {
    children: ReactNode
}

type UserContextType = {
    isOpenModal: boolean;
    setIsOpenModal: (newState: boolean) => void

}

const initialValue = {
    isOpenModal: false,
    setIsOpenModal: () => {},
}

// Provider


export const UserContext = createContext<UserContextType>(initialValue)

export const UserContextProvider = ({ children }: UserContextProps) => {
    const [isOpenModal, setIsOpenModal] = useState(initialValue.isOpenModal)
    return (
        <UserContext.Provider value={{isOpenModal, setIsOpenModal}}>
            { children }
        </UserContext.Provider>
    )
}