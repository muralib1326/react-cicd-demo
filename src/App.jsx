import { useEffect, useState } from 'react'
import './App.css'
import NavBar from './components/Navbar';
import Productlist from './components/Productlist';
import Form from './components/Form';
import Cart from './components/Cart';
import useProducts from './hooks/useProducts';
import {
  BrowserRouter,
  Routes,
  Route
} from 'react-router-dom';
function App() {
  const [search, setSearch] = useState("");
  const {products ,loading } = useProducts();

  return (
    <>
      <BrowserRouter>
        <NavBar />
        <Routes>
          <Route path="/" element={<Productlist products={products} search={search} loading={loading} />} />
          <Route path="/form" element={<Form search={search} setSearch={setSearch} />} />
          <Route path="/cart" element={<Cart />} />
        </Routes>
      </BrowserRouter>

    </>
  )
}

export default App
