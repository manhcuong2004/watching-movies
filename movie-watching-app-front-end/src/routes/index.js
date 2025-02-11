import { Route, Routes } from "react-router-dom";
import Home from "../pages/Home";
import Series from "../pages/Series";
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
function Layout() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/:category" element={<Category />} />
        {/* <Route path="/series" element={<Series />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:category/:categoryName" element={<Movies />} />
        <Route path="/:category/:categoryName/:pageNumber" element={<Movies />} />
        <Route path="/:type/:slug" element={<MoviePage />} />
        <Route path="/:type/:slug/:currentEpsiode" element={<MoviePage />} />
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/my-account" element={<MyAccount />} /> */}
      </Routes>
    </>
  );
}
const privateRoutes = [
  {
    path: "/",
    layout: DefaultLayout,
    element: Home,
  },
  {
    path: "/:category",
    layout: DefaultLayout,
    element: Category,
    children: [
      {
        path: ":categoryName",
        element: Movies,
        children: [
          {
            path: ":pageNumber",
            element: Movies,
          },
        ],
      },
    ],
  },
];

export { privateRoutes };
