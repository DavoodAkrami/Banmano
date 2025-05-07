import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import ProductPage from "./pages/client/ProductPage/ProductPage"
import Auth from "./pages/client/Auth/Auth"
import Home from "./pages/client/Home/Home"
import Header from "./Layouts/Header/Header"
import MyProfile from "./pages/panel/Profile/MyProfile/MyProfile"

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
          <Route path="Banmano/panel" element={<MyProfile />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}

export default App
