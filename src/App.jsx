import { useState, useEffect } from 'react'
import reactLogo from './assets/react.svg'
import Login from './pages/Login'
import logo from '../src/assets/icons/logo.svg'
import OrdersPage from './pages/OrdersPage'
import Sidebar from './components/global-components/Sidebar'
import Header from './components/global-components/Header'
import ProductsPage from './pages/ProductsPage'
import { Routes, Route, Link, useLocation, Navigate } from 'react-router-dom'
import Dashboard from './pages/Dashboard'
import ProtectedRoute from './components/routing-components/ProtectedRoute'
import BuyersPage from './pages/BuyersPage'

function App() {
  const [count, setCount] = useState(0)

  const location = useLocation();

  // useEffect(() => {
  //   console.log(location)
  // }, [location])


  return (
    <div className="App">

      {/* sidebar */}
      {location?.pathname.includes('/login') ? '' : <Sidebar />}


      <div className='w-full pl-[250px] poppins'>
        {location?.pathname.includes('/login') ? '' : <Header />}

        <Routes>
          {/* <Route path='*' element={<Navigate to={localStorage.getItem("status") === 'true' ? '/admin-dashboard' : '/login'} replace={true} />} /> */}
          <Route path='/' element={<Navigate to={'/orders'} replace={true} />} />

          <Route element={<Login />} path={'/login'} />


          {/* <Route element={<ProtectedRoute />}>
            <Route path='/admin-dashboard' element={<Dashboard />} />
            <Route element={<ProductsPage />} path={'/products'} />
            <Route element={<OrdersPage />} path={'/orders'} />
          </Route> */}
          {/* <Route path='/admin-dashboard' element={<Dashboard />} /> */}
          <Route element={<ProductsPage />} path={'/products'} />
          <Route element={<OrdersPage />} path={'/orders'} />
          <Route element={<BuyersPage />} path={'/buyers'} />


          {/* <Route element={<Dashboard />} path={'/'} /> */}
        </Routes>
      </div>
    </div>
  )
}

export default App
