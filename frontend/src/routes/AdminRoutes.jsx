import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import UserListScreen from "../screens/Admin/UserListScreen";
import Dashboard from "../screens/Admin/Dashboard";
import UserEditScreen from "../screens/UserEditScreen";
import ProductlistScreen from "../screens/Admin/ProductListScreen";
import ProductEditScreen from "../screens/Admin/ProductEditScreen";
import OrderListScreen from "../screens/Admin/OrderListScreen";
import Header from "../components/layouts/Header";
import { Container } from "react-bootstrap";
import Footer from "../components/layouts/Footer";
import NotFound from "../screens/NotFound";
import AdminHeader from "../components/layouts/AdminHeader";
import CarouselConfig from "../screens/Admin/CarouselConfig";
import OfferConfig from "../screens/Admin/OfferConfig";

import Matrials from '../screens/Admin/MatrialsListScreen'
import MaterialAdd from '../screens/Admin/MaterialAddScreen'
import MaterialEditScren from "../screens/Admin/MaterialUpdateScreen";
import BatchListScreen from "../screens/Admin/BatchListScreen";
import GrnScreen from "../screens/Admin/GrnScreen";
import GrnUpdateScreen from "../screens/Admin/GrnUpdateScreen";
import ProductOutListScreen from "../screens/Admin/ProductOutListScreen";



const AdminRoutes = () => {
  return (
    <>
      <AdminHeader />
      <main>
        <Container fluid />
        <Routes>
          <Route path="/users" element={<UserListScreen />} />

          <Route path="/user/:id/edit" element={<UserEditScreen />} />

          <Route path="/dashboard" element={<Dashboard />} />
          {/* <Route path='/productlist' element={<ProductlistScreen />} />
          <Route
            path='/products/:id/edit'
            element={<ProductEditScreen />}
            exact
          /> */}

          <Route path="/config/carousel" element={<CarouselConfig />} />
          <Route path="/config/offers" element={<OfferConfig />} />

{/* custom produts */}
          <Route path="/products/active" element={<ProductlistScreen />} />
          <Route path="/products/outofstock" element={<ProductlistScreen />} />
          <Route path="/products/deactivated" element={<ProductlistScreen />} />
          <Route
            path="/products/:path/:id/edit"
            element={<ProductEditScreen />}
          />
{/* off the shelf produts */}
<Route path="/productsout/active" element={<ProductOutListScreen />} />

          <Route path="/orders/neworders" element={<OrderListScreen />} />
          <Route path="/orders/processing" element={<OrderListScreen />} />
          <Route path="/orders/dispatched" element={<OrderListScreen />} />
          <Route path="/orders/completed" element={<OrderListScreen />} />

          <Route path="/materials" element={<Matrials />} />
          <Route path="/materials/add" element={<MaterialAdd />} />
          <Route path="/materials/:id/edit" element={<MaterialEditScren  />} />


          <Route path="/batches" element={<BatchListScreen />} />
          <Route path="/batches/add" element={<GrnScreen />} />
          <Route path="/batches/:id/edit" element={<GrnUpdateScreen />} />

          <Route path="/*" element={<NotFound />} />

          {/* legacy routes */}
          {/* <Route path='productlist/:pagenumber' element={<ProductlistScreen />} /> */}
          {/* <Route path='productlist' element={<ProductlistScreen />} /> */}
        </Routes>
        <Container fluid />
      </main>
      <Footer />
    </>
  );
};

export default AdminRoutes;
