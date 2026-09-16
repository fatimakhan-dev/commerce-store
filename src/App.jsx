import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useMemo, useState } from 'react'
import Layout from './components/Layout'
import HomePage from './pages/HomePage'
import ShopPage from './pages/ShopPage'
import CartPage from './pages/CartPage'
import CheckoutPage from './pages/CheckoutPage'
import PaymentSuccessPage from './pages/PaymentSuccessPage'
import DownloadsPage from './pages/DownloadsPage'
import WishlistPage from './pages/WishlistPage'
import LoginPage from './pages/LoginPage'
import RegisterPage from './pages/RegisterPage'
import DashboardPage from './pages/DashboardPage'
import AdminPage from './pages/AdminPage'
import CategoriesPage from './pages/CategoriesPage'
import { products } from './data/products'

function App() {
  const [cart, setCart] = useState([])
  const [wishlist, setWishlist] = useState([1])

  const addToCart = (product) => {
    setCart((current) => {
      const found = current.find((item) => item.id === product.id)
      if (found) {
        return current.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { ...product, quantity: 1 }]
    })
  }

  const toggleWishlist = (productId) => {
    setWishlist((current) =>
      current.includes(productId)
        ? current.filter((id) => id !== productId)
        : [...current, productId],
    )
  }

  const featuredProducts = useMemo(() => products.slice(0, 3), [])

  return (
    <BrowserRouter>
      <Layout cartCount={cart.length} wishlistCount={wishlist.length}>
        <Routes>
          <Route
            path="/"
            element={
              <HomePage
                onAddToCart={addToCart}
                wishlist={wishlist}
                onToggleWishlist={toggleWishlist}
                featuredProducts={featuredProducts}
              />
            }
          />
          <Route path="/shop" element={<ShopPage onAddToCart={addToCart} wishlist={wishlist} onToggleWishlist={toggleWishlist} />} />
          <Route path="/cart" element={<CartPage />} />
          <Route path="/checkout" element={<CheckoutPage />} />
          <Route path="/payment-success" element={<PaymentSuccessPage />} />
          <Route path="/downloads" element={<DownloadsPage />} />
          <Route path="/wishlist" element={<WishlistPage />} />
          <Route path="/login" element={<LoginPage />} />
          <Route path="/register" element={<RegisterPage />} />
          <Route path="/dashboard" element={<DashboardPage />} />
          <Route path="/admin" element={<AdminPage />} />
          <Route path="/sell" element={<DashboardPage />} />
          <Route path="/categories" element={<CategoriesPage />} />
        </Routes>
      </Layout>
    </BrowserRouter>
  )
}

export default App
