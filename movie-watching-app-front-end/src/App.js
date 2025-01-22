import Home from "./pages/Home";
import Series from "./pages/Series";
import Movies from "./pages/Movies";
import AboutUs from "./pages/AboutUs";
import Pricing from "./pages/Pricing";
import FAQ from "./pages/FAQ";
import MyProfile from "./pages/MyProfile";
import Contact from "./pages/Contact";
import LoginRegister from "./pages/LoginRegister";
import MoviePage from "./pages/MoviePage";
import LandingPage from "./pages/LandingPage";
import MyAccount from "./pages/MyAccount";
import Header from "./components/components/Header/Header";
import Footer from "./components/components/Footer/Footer";
import Movie from "./components/components/Movie";
import {
  BrowserRouter as Router,
  Route,
  Routes,
  Link,
  NavLink,
  Switch,
} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Router>
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
          <Route path="/login-register" element={<LoginRegister />} />
          <Route
            path="/movie-page/:movieName"
            element={<MoviePage />}
          />
          <Route path="/landing-page" element={<LandingPage />} />
          <Route path="/my-account" element={<MyAccount />} />
          <Route path="/movie" element={<Movie />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
