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
import AboutPage from './pages/AboutPage';
import AdminDashboard from './pages/admin/AdminDashboard';
import ManageUsersPage from './pages/admin/ManageUsersPage';
import ManageOdersPage from './pages/admin/ManageOdersPage';
import ManageListingsPage from './pages/admin/ManageListingsPage';
import OrdersPage from './pages/customer/OrdersPage';

function App() {
  return (
    <Fragment>
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

<Route path="/admin/listingitems" element={
          <AdminRoute>
            <ManageListingsPage />
          </AdminRoute>
        } />

          <Route path="/admin/products" element={
            <AdminRoute>
              <ManageListingsPage/>
            </AdminRoute>
          }/>

        <Route path='/products' element={<AllProductsPage />} />
        <Route path='/products/:productId' element={<ProductDetailsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </Fragment>
  );
}

export default App;
