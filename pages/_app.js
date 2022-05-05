import NavBar from "../components/NavBar";
import "../styles/globals.css";

function App({ Component, pageProps }) {
  return (
    <main>
      <NavBar />
      <Component {...pageProps} />
    </main>
  );
}

export default App;
