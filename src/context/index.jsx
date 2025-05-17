import UserProvider from "./UsersContext";

const ContextProvider = ({children}) => {
    return (
        <UserProvider>
                        {children}
        </UserProvider>
    )
}

export default ContextProvider;