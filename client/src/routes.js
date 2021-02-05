import { lazy } from "react";
// import Dashboard from "./components/views/Dashboard";
// import ProductListPage from "./components/ProductsList/ProductListPage";
// import UserProfile from './components/views/UserProfile'
import { faDatabase, faRupeeSign, faShoppingBag, faUserAlt, faUserCircle } from "@fortawesome/free-solid-svg-icons";
// import Product from "./components/ProductsList/Product";
// import OrderList from "./components/Order/OrderList";
// import CustomerList from "./components/Customers/CustomerList";


const Dashboard = lazy(() => import('./components/views/Dashboard'));
const ProductListPage = lazy(() => import('./components/ProductsList/ProductListPage'));
const UserProfile = lazy(() => import('./components/views/UserProfile'));
const Product = lazy(() => import('./components/ProductsList/Product'));
const OrderList = lazy(() => import('./components/Order/OrderList'));
const CustomerList = lazy(() => import('./components/Customers/CustomerList'));


const dashboardRoutes = [

  {
    path: "/dashboard",
    name: "Dashboard",
    icon: faDatabase,
    component: Dashboard,
    layout: "/admin"
  },
  {
    path: "/user",
    name: "User Profile",
    icon: faUserCircle,
    component: UserProfile,
    layout: "/admin"
  },
  {
    path: "/products",
    name: "Products",
    icon: faShoppingBag,
    component: ProductListPage,
    layout: "/admin"
  },
  

  {
    path: "/products/:name",
    name: "Single Product",
    display:'none',
    icon: faShoppingBag,
    component:Product ,
    layout: "/admin"
  },
  {
    path: "/orders",
    name: "Orders",
    icon: faRupeeSign,
    component: OrderList,
    layout: "/admin"
  },
  {
    path: "/customers",
    name: "Customers",
    icon: faUserAlt,
    component: CustomerList,
    layout: "/admin"
  }
];

export default dashboardRoutes;
