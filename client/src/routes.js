import Dashboard from "./components/views/Dashboard";
// import UserProfile from "./components/views/UserProfile";
// import TableList from "./components/views/TableList.jsx";
// import Typography from "./components/views/Typography.jsx";
// import Icons from "./components/views/Icons.jsx";
// import Maps from "./components/views/Maps.jsx";
// import Notifications from "./components/views/Notifications.jsx";
// import Upgrade from "./components/views/Upgrade.jsx";
import Home from './components/auth/Home';
import Bodycopy from "./components/Bodycopy";
import UserProfile from './components/views/UserProfile'
import { faDatabase, faHome, faLaptop, faRupeeSign, faShoppingBag, faUserCircle } from "@fortawesome/free-solid-svg-icons";
import Product from "./components/ProductsList/Product";
import OrderList from "./components/OrderList/OrderList";


const dashboardRoutes = [
  // {
    
  //   path: "/",
  //   name: "Home",
  //   icon: faHome,
  //   component: Home,
  //   layout: ""
  // },
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
    component: Bodycopy,
    layout: "/admin"
  },
  
  {
    path: "/orders",
    name: "Orders",
    icon: faRupeeSign,
    component:OrderList ,
    layout: "/admin"
  },
  {
    path: "/products/:name",
    name: "Single Product",
    display:'none',
    icon: faShoppingBag,
    component:Product ,
    layout: "/admin"
  }
  // {
  //   path: "/typography",
  //   name: "Typography",
  //   icon: "pe-7s-news-paper",
  //   component: Typography,
  //   layout: "/admin"
  // },
  // {
  //   path: "/icons",
  //   name: "Icons",
  //   icon: "pe-7s-science",
  //   component: Icons,
  //   layout: "/admin"
  // },
  // {
  //   path: "/maps",
  //   name: "Maps",
  //   icon: "pe-7s-map-marker",
  //   component: Maps,
  //   layout: "/admin"
  // },
  // {
  //   path: "/notifications",
  //   name: "Notifications",
  //   icon: "pe-7s-bell",
  //   component: Notifications,
  //   layout: "/admin"
  // },
  // {
  //   upgrade: true,
  //   path: "/upgrade",
  //   name: "Upgrade to PRO",
  //   icon: "pe-7s-rocket",
  //   component: Upgrade,
  //   layout: "/admin"
  // }
];

export default dashboardRoutes;
