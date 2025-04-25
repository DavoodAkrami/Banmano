import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import ProductPage from "./pages/client/ProductPage/ProductPage"
import Auth from "./pages/client/Auth/Auth"
import Home from "./pages/client/Home/Home"
import links from "./routes/links"
import ProfileUsers from "./pages/panel/Profile/ProfileUser/ProfileUsers"
import Header from "./Layouts/Header/Header"
import { useContext } from "react"

const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

const App = () => {
  
  const isAuth = localStorage.getItem('token');
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout><Outlet /></Layout>}>
          <Route path="Banmano/" element={<Home />} />
          <Route path="Banmano/auth" element={<Auth />} />
          <Route path="/product/:productId" element={<ProductPage />} />
          <Route path="Banmano/users" element={<ProfileUsers />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
