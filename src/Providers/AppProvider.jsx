import ContextProvider from "../context/index";
import { BrowserRouter } from "react-router-dom";

const AppProvider = ({children}) => {
    return (
        <BrowserRouter>
            <ContextProvider>
                {children}
            </ContextProvider>
        </BrowserRouter>
    )
}

export default AppProvider;