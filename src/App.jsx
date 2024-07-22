import React, { Fragment } from 'react';
import { Routes, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import MainContent from './components/MainContent';
import NotFoundPage from './pages/NotFoundPage';
import AdminRoute from './routes/AdminRoute';
import PrivateRoute from './routes/PrivateRoute';
import SignupPage from './pages/SignupPage';
import LoginPage from './pages/LoginPage';
import ProfilePage from './pages/ProfilePage'
import AdminDashboard from './pages/AdminDashboard';
import AllProductsPage from './pages/AllProductsPage';



function App() {
 
  return (
    <Fragment>
      <Routes>
        <Route path="/" element={<HomePage />}/>
        <Route path='/signup' element={<SignupPage />} />
        <Route path='/login' element={<LoginPage />} />

        <Route path="/profile/:userId" 
              element={
              <PrivateRoute>
                 <ProfilePage/>
              </PrivateRoute>
            } 
        />
        <Route
          path="/cart"
          element={
            <PrivateRoute>
              {<h1>Cart page placeholder</h1>}
            </PrivateRoute>
          }
        />


        <Route path="/admin" element={
          <AdminRoute>
            <AdminDashboard />
          </AdminRoute>
        }/>

        <Route path='/products' element= {<AllProductsPage/>} />
        <Route path='/products/:productId' element={<h1>ProductDetailsPage</h1>}/>
        <Route
          path='/products/new'
          element={
            <PrivateRoute>
              {<h1>New Product Form</h1>}
            </PrivateRoute>
          }
        />
        <Route path="*" element={<NotFoundPage />}/>
      </Routes>
    </Fragment>  
    );
}

export default App;


