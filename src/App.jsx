import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import NotFoundPage from './pages/NotFoundPage';
import AdminRoute from './components/routes/AdminRoute';
import PrivateRoute from './components/routes/PrivateRoute';
import ProfilePage from './pages/customer/ProfilePage'
import AllProductsPage from './pages/AllProductsPage';
import CartPage from './pages/customer/CartPage';
import ProductDetailsPage from './pages/ProductDetailsPage';
import ContactPage from './pages/ContactPage';
import AboutTeamPage from './pages/AboutTeamPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsersPage from './pages/admin/ManageUsersPage';
import ManageOdersPage from './pages/admin/ManageOdersPage';
import ManageListingsPage from './pages/admin/ManageListingsPage';
import OrdersPage from './pages/customer/OrdersPage';
import ManageSingleUserProductsPage from './pages/admin/ManageSingleUserProductsPage'
import MangeSingleUserOrdersPage from './pages/admin/ManageSingleUserOrdersPage'
import CheckoutPage from './pages/customer/CheckoutPage';
import AboutPage from './pages/AboutPage';

function App() {
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />} />

        <Route path="/profile"
          element={
            <PrivateRoute>
              <ProfilePage /> {/*corresponding to userId, also access orders under this page */}
            </PrivateRoute>
          }
        />
        <Route
          path="/profile/cart"
          element={
            <PrivateRoute>
              <CartPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile/orders"
          element={
            <PrivateRoute>
              <OrdersPage />
            </PrivateRoute>
          }
        />

        <Route
          path="/profile/checkout"
          element={
            <PrivateRoute>
              <CheckoutPage/>
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

        <Route path="/admin/products" element={
          <AdminRoute>
            <ManageListingsPage />
          </AdminRoute>
        } />

        <Route path="/user/:userId/products" element={
          <AdminRoute>
            <ManageSingleUserProductsPage />
          </AdminRoute>
        } />

        <Route path="/user/:userId/orders" element={
          <AdminRoute>
            <MangeSingleUserOrdersPage />
          </AdminRoute>
        } />

        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/products/:productId' element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/aboutUs" element={<AboutTeamPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
