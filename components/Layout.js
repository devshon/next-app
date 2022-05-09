import NavBar from "./NavBar";
import Footer from "./Footer";

function Layout({ children }) {
  return (
    <main>
      <NavBar />
      {children}
      <Footer />
    </main>
  );
}

export default Layout;
