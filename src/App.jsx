import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AdminRoute from './components/routes/AdminRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import ProfilePage from './pages/member/ProfilePage'
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/member/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ContactPage from './pages/ContactPage';
import AboutPage from './pages/AboutPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsersPage from './pages/admin/ManageUsersPage';
import ManageOdersPage from './pages/admin/ManageOdersPage';
import ManageListingsPage from './pages/admin/ManageListingsPage';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/profile/:userId"
          element={
            <PrivateRoute>
              <ProfilePage /> {/*corresponding to userId, also access orders under this page */}
            </PrivateRoute>
          }
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />

        <Route path="/admin" element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        } />

        <Route path="/admin/users" element={
          <AdminRoute>
            <ManageUsersPage />
          </AdminRoute>
        } />

        <Route path="/admin/orders" element={
          <AdminRoute>
            <ManageOdersPage />
          </AdminRoute>
        } />

        <Route path="admin/products" element={
          <AdminRoute>
            <ManageListingsPage />
          </AdminRoute>
        } />

        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/products/:productId' element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </>
  );
}

export default App;
