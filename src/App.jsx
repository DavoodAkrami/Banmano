import { BrowserRouter, Routes, Route, Outlet } from "react-router-dom"
import { UserContext } from "./context/UsersContext"; 
import ProductPage from "./pages/client/ProductPage/ProductPage"
import Auth from "./pages/client/Auth/Auth"
import Home from "./pages/client/Home/Home"
import Header from "./Layouts/Header/Header"
import MyProfile from "./pages/panel/Profile/MyProfile/MyProfile"
import links from "./routes/links"
import { useContext } from "react";
import Footer from "./Layouts/Footer/Footer"



const Layout = ({ children }) => {
  return (
    <>
      <Header />
      {children}
    </>
  )
}

const PanelLayout = ({ children }) => {
  return (
    <>
    <Header />
    {children}
    <Footer />
    </>
  )
}

const client_pages = [
  {
    path: links.client.home,
    element: <Home />,
  },
  {
    path: links.client.auth,
    element: <Auth />,
  },
  {
    path: links.client.product,
    element: <ProductPage />,
  },
]

const panel_pages = [
  {
    path: links.panel.panel,
    element: <MyProfile />,
  }
]

const App = () => {
  
  const isAuth = localStorage.getItem('token') ? true : false;
  const {user} = useContext(UserContext)

  return (
    <Routes>
      <Route element={<Layout><Outlet /></Layout>}>
        {client_pages.map((page) => (
          <Route key={page.path} path={page.path} element={page.element} />
        ))}
        {isAuth && (
          <Route path={links.panel.home}>
            {
              panel_pages.map((page) => {
                if (page.isIndex) {
                  return (
                    <Route key='index-panel' index element={page.element} />
                  )
                }
                if (page.requireAdminRule) {
                  if (user.isAdmin) {
                    return (
                      <Route key={page.path} path={page.path} element={page.element} />
                    )
                  } else {
                    return (
                      <Route key={page.path} path={page.path} element={<div>not authiorized app</div>} />
                    )
                  }
                }
                return (
                  <Route key={page.path} path={page.path} element={page.element} />
                )
              })
            }
          </Route>
        )}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Route>
    </Routes>
  )
}

export default App
