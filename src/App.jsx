import { useState, useEffect } from 'react'
import { NavBar } from './assets/pages/NavBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import 'mdb-react-ui-kit/dist/css/mdb.min.css';
import "@fortawesome/fontawesome-free/css/all.min.css";
import { Route, Routes, useLocation } from 'react-router-dom';
import Home from './assets/pages/Home';
import UserLog from './assets/pages/user/userLog';
import UserSign from './assets/pages/user/userSign';
import { Dealer } from './assets/pages/Dealer/Dealer';
import AddProducts from './assets/pages/products/AddProducts';
import ViewProduct from './assets/pages/products/ViewProduct';
import { Provider } from 'react-redux';
import store from './assets/Redux/store';
import Cart from './assets/pages/products/Cart';
import AdminLog from './assets/pages/Dealer/AdminLog';
import EditProduct from './assets/pages/Dealer/EditProduct';
import Dealeradd from './assets/pages/Dealer/Dealeradd';
import DealerProducts from './assets/pages/Dealer/dealerProducts';

function App() {
    const Location = useLocation()
    const [change, setChange] = useState(false)


    useEffect(()=> {
      if(location.pathname.includes('dealer') || location.pathname.includes('dealeradd') || location.pathname.includes('edit') ) {
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
      
      
      <Route path='/dealer' element={<Dealer/>}/>
      <Route path='/adminlog' element={<AdminLog/>}/>
      <Route path='/dealerproducts' element={<DealerProducts/>}/>
      <Route path='/dealeradd' element={<Dealeradd/>} />
      <Route path='/edit/:id' element={<EditProduct/>} />
      
      </Routes>
    </Provider>
  )
}

export default App
