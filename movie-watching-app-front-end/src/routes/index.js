import Home from "../pages/Home";
import Movies from "../pages/Movies";
import AboutUs from "../pages/AboutUs";
import Pricing from "../pages/Pricing";
import FAQ from "../pages/FAQ";
import MyProfile from "../pages/MyProfile";
import Contact from "../pages/Contact";
import Login from "../pages/Login";
import Register from "../pages/Register";
import MoviePage from "../pages/MoviePage";
import LandingPage from "../pages/LandingPage";
import MyAccount from "../pages/MyAccount";
import Category from "../pages/Category";
import DefaultLayout from "../components/layout/DefaultLayout";

const publicRoutes = [
  {
    path: "/",
    layout: null,
    element: LandingPage,
  },
  {
    path: "/login",
    layout: null,
    element: Login,
  },
  {
    path: "/register",
    layout: null,
    element: Register,
  },
];
const privateRoutes = [
  {
    path: "/home",
    layout: DefaultLayout,
    element: Home,
  },
  {
    path: "/tv/:slug/:currentEpsiode",
    layout: DefaultLayout,
    element: MoviePage,
  },
  {
    path: "/tv/:slug",
    layout: DefaultLayout,
    element: MoviePage,
  },
  {
    path: "/movie/:slug",
    layout: DefaultLayout,
    element: MoviePage,
  },
  {
    path: "/series",
    layout: DefaultLayout,
    element: Category,
  },
  {
    path: "/series/:categoryName",
    layout: DefaultLayout,
    element: Movies,
  },
  {
    path: "/series/:categoryName/:pageNumber",
    layout: DefaultLayout,
    element: Movies,
  },
  {
    path: "/movies",
    layout: DefaultLayout,
    element: Category,
  },
  {
    path: "/movies/:categoryName",
    layout: DefaultLayout,
    element: Movies,
  },
  {
    path: "/movies/:categoryName/:pageNumber",
    layout: DefaultLayout,
    element: Movies,
  },
  {
    path: "/about-us",
    layout: DefaultLayout,
    element: AboutUs,
  },
  {
    path: "/pricing",
    layout: DefaultLayout,
    element: Pricing,
  },
  {
    path: "/faq",
    layout: DefaultLayout,
    element: FAQ,
  },
  {
    path: "/my-profile",
    layout: DefaultLayout,
    element: MyProfile,
  },
  {
    path: "/contact",
    layout: DefaultLayout,
    element: Contact,
  },
  {
    path: "/my-account",
    layout: DefaultLayout,
    element: MyAccount,
  },
];

export { privateRoutes, publicRoutes };
