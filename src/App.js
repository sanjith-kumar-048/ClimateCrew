import "./App.css";
import { Routes, Route } from "react-router-dom";
import Layout from "./components/layouts/Layout";
import HomePage from "./pages/HomePage";
import ClimateChange from "./pages/ClimateChange";
import CarbonFootprint from "./pages/CarbonFootprint";
import Products from "./pages/Products";
import FAQ from "./pages/FAQ";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" exact element={<HomePage />} />
        {/* <HomePage />
        </Route> */}
        <Route path="/climate_change" element={<ClimateChange />} />
        {/* <ClimateChange />
        </Route> */}
        <Route path="/carbon_footprint" element={<CarbonFootprint />} />
        {/* <CarbonFootprint />
        </Route> */}
        <Route path="/products" element={<Products />} />
        {/* <Products />
        </Route> */}
        <Route path="/faq" element={<FAQ />} />
        {/* <FAQ />
        </Route> */}
      </Routes>
    </Layout>
  );
}

export default App;
