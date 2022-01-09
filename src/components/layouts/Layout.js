import Footer from "./Footer";
// import classes from "./Layout.module.css";
import Navbar from "./Navbar";
function Layout(props) {
  return (
    <div>
      <Navbar />
      {/* <Navbar /> */}
      <main>{props.children}</main>

      {/* <Footer /> */}
      <Footer />
    </div>
  );
}

export default Layout;
