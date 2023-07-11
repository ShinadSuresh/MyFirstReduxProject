import { useState, useEffect } from 'react'
import { NavBar } from './assets/pages/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './assets/pages/Home';
import UserLog from './assets/pages/user/userLog';
import UserSign from './assets/pages/user/userSign';
import { Admin } from './assets/pages/admin/Admin';
import AddProducts from './assets/pages/products/AddProducts';
import ViewProduct from './assets/pages/products/ViewProduct';
import { Provider } from 'react-redux';
import store from './assets/Redux/store';
import Cart from './assets/pages/products/Cart';
import AdminLog from './assets/pages/admin/AdminLog';
import AdminProducts from './assets/pages/admin/adminProducts';
import Adminadd from './assets/pages/admin/Adminadd';
import EditProduct from './assets/pages/admin/EditProduct';


function App() {
    const Location = useLocation()
    const [change, setChange] = useState(false)


    useEffect(()=> {
      if(location.pathname.includes('admin') || location.pathname.includes('adminlog') || location.pathname.includes('edit') ) {
        setChange(true)
      }
      else {
        setChange(false)
      }
    },[Location])
  

  return (
    <Provider store={store}>
    {change?null :  <NavBar/>}
   
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/userlog' element={<UserLog/>}/>
      <Route path='/usersign' element={<UserSign/>}/>
      <Route path='/products' element={<AddProducts/>}/>
      <Route path='/viewproduct/:id' element={<ViewProduct/>}/>
      <Route path='/cart' element={<Cart/>}/>
      
      
      <Route path='/admin' element={<Admin/>}/>
      <Route path='/adminlog' element={<AdminLog/>}/>
      <Route path='/adminproducts' element={<AdminProducts/>}/>
      <Route path='/adminadd' element={<Adminadd/>} />
      <Route path='/edit/:id' element={<EditProduct/>} />
      
      </Routes>
    </Provider>
  )
}

export default App
