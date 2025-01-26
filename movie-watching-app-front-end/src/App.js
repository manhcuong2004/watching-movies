import { BrowserRouter as Router } from "react-router-dom";
import Layout from "./layout";
import Video from "./components/components/Video";
import MoviePage from "./pages/MoviePage";

function App() {
  return (
    <Router>
      <div className="App">
        <Layout />
      </div>
    </Router>
  );
}

export default App;
