import React from 'react';
import ReactDOM from 'react-dom/client';
import reportWebVitals from './reportWebVitals';
import {BrowserRouter, Route, Routes} from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import Login from './Screens/Auth/Login';
// import Register from './Screens/Auth/Register';
import ProtectedRoute from './Navigation/protectedRoute';
import Dashboard from './Screens/Dashboard';
import Bill from './Screens/Bill';
import Customer from './Screens/Customer';
import Item from './Screens/Item';
import Order from './Screens/Order';
import Pos from './Screens/Pos';
import Product from './Screens/Product';
import Receipt from './Screens/Receipt';
import Setting from './Screens/Setting';
import RefundReceipt from './Screens/Receipt/Refund';
import AdminPanel from './Screens/Admin';
// import Panel from './Screens/Panel';
import Modifiers from './Screens/Modifier';
import { ToastContainer } from 'react-toastify';
import './index.css';
import "@fontsource/rubik"; // Defaults to weight 400
import "@fontsource/rubik/400.css"; // Specify weight
import "@fontsource/rubik/400-italic.css"; // Specify weight and style
import 'react-toastify/dist/ReactToastify.css';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
    <React.StrictMode>
        {/* <Navigator /> */}
        <BrowserRouter>
            <Routes>
                <Route path='/login' element={<Login/>}/>
                {/* <Route path='/register' element={<Register/>}/> */}
                <Route
                    path="/"
                    element={
                        <ProtectedRoute>
                            <Dashboard/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/bills"
                    element={
                        <ProtectedRoute>
                            <Bill/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/customers"
                    element={
                        <ProtectedRoute>
                            <Customer/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/Items"
                    element={
                        <ProtectedRoute>
                            <Item/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/orders"
                    element={
                        <ProtectedRoute>
                            <Order/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/Pos"
                    element={
                        <ProtectedRoute>
                            <Pos/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/products"
                    element={
                        <ProtectedRoute>
                            <Product/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/receipts"
                    element={
                        <ProtectedRoute>
                            <Receipt/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/refund-receipt"
                    element={
                        <ProtectedRoute>
                            <RefundReceipt/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/setting"
                    element={
                        <ProtectedRoute>
                            <Setting/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/login"
                    element={
                        <ProtectedRoute>
                            <Login/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/admin-panel"
                    element={
                        <ProtectedRoute>
                            <AdminPanel/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/modifiers"
                    element={
                        <ProtectedRoute>
                            <Modifiers/>
                        </ProtectedRoute>
                    }
                />
                <Route
                    path="/modifiers"
                    element={
                        <ProtectedRoute>
                            <Modifiers/>
                        </ProtectedRoute>
                    }
                />
            </Routes>
        </BrowserRouter>
        <ToastContainer 
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
    </React.StrictMode>
);

reportWebVitals();
