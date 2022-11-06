import Nav from "../components/navigation/Nav";
import Footer from "../components/navigation/Footer";

export default function Layout({ children }) {
  return (
    <>
      <Nav />
      <div className="min-h-screen">
        {/* <Alert preview={preview} /> */}
        <main>{children}</main>
      </div>
      <Footer />
    </>
  );
}
