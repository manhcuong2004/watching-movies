import { Route, Routes, useLocation } from "react-router-dom";
import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import MyProfile from "./pages/MyProfile";
import Contact from "./pages/Contact";
import Login from "./pages/Login";
import Register from "./pages/Register";
import MoviePage from "./pages/MoviePage";
import LandingPage from "./pages/LandingPage";
import MyAccount from "./pages/MyAccount";
import Header from "./pages/Header/Header";
import Footer from "./pages/Footer/Footer";

function Layout() {
  const location = useLocation();
  const hideHeaderFooter = ["/landing-page", "/login", "/register"].includes(
    location.pathname
  );

  return (
    <>
      {!hideHeaderFooter && <Header />}
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/series" element={<Series />} />
        <Route path="/movies/:categoryName" element={<Movies />} />
        <Route path="/movies/:categoryName/:pageNumber" element={<Movies />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pricing" element={<Pricing />} />
        <Route path="/faq" element={<FAQ />} />
        <Route path="/my-profile" element={<MyProfile />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/:type/:slug" element={<MoviePage />} />
        <Route path="/:type/:slug/:currentEpsiode" element={<MoviePage />} />
        {/* <Route path="/movie-page/tv/:slug" element={<MoviePage />} /> */}
        <Route path="/landing-page" element={<LandingPage />} />
        <Route path="/my-account" element={<MyAccount />} />
      </Routes>
      {!hideHeaderFooter && <Footer />}
    </>
  );
}

export default Layout;
