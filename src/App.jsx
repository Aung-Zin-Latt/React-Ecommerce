import './App.css'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { HelmetProvider } from 'react-helmet-async'
import Layout from './components/Layout'
import Home from './pages/Home'
import About from './pages/About'
import Contact from './pages/Contact'
import OurStore from './pages/OurStore'
import Blogs from './pages/Blogs'
import CompareProduct from './pages/CompareProduct'
import Wishlist from './pages/Wishlist'
import Login from './pages/Login'
import Signup from './pages/Signup'
import ForgotPassword from './pages/ForgotPassword'
import ResetPassword from './pages/ResetPassword'
import BlogDetails from './pages/BlogDetails'
import PrivacyPolicy from './pages/PrivacyPolicy'
import RefundPolicy from './pages/RefundPolicy'
import ShippingPolicy from './pages/ShippingPolicy'
import TermAndCondition from './pages/TermAndCondition'
import ProductDetails from './pages/ProductDetails'

function App() {

  return (
    <>
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route path='/' element={<Layout />}>
            <Route index element={<Home />} />
            <Route path='about' element={<About />} />
            <Route path='blogs' element={<Blogs />} />
            <Route path='blog/:id' element={<BlogDetails />} />
            <Route path='contactus' element={<Contact />} />
            <Route path='product' element={<OurStore />} />
            <Route path='product/:id' element={<ProductDetails />} />
            <Route path='compare-product' element={<CompareProduct />} />
            <Route path='wishlist' element={<Wishlist />} />
            <Route path='login' element={<Login />} />
            <Route path='signup' element={<Signup />} />
            <Route path='forgot-password' element={<ForgotPassword />} />
            <Route path='reset-password' element={<ResetPassword />} />
            <Route path='privacy-policy' element={<PrivacyPolicy />} />
            <Route path='refund-policy' element={<RefundPolicy />} />
            <Route path='shipping-policy' element={<ShippingPolicy />} />
            <Route path='term-conditions' element={<TermAndCondition />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
    </>
  )
}

export default App
