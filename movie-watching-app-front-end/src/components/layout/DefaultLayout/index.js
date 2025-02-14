import Header from "../../components/Header/Header";
import Footer from "../../components/Footer/Footer";
function DefaultLayout({ children }) {
  return (
    <main>
      <header>
        <Header />
      </header>
      <div className="body">{children}</div>
      <footer>
        <Footer />
      </footer>
    </main>
  );
}

export default DefaultLayout;
