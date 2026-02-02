import { BrowserRouter, Routes, Route } from "react-router";
import { HomePage } from "@/app/pages/HomePage";
import { ShopPage } from "@/app/pages/ShopPage";
import { CategoriesPage } from "@/app/pages/CategoriesPage";
import { Navbar } from "@/app/components/Navbar";
import { Footer } from "@/app/components/Footer";
import { DealsPage } from "@/app/pages/DealsPage";
function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/shop" element={<ShopPage />} />
        <Route path="/categories" element={<CategoriesPage />} />
        <Route path="/deals" element={<DealsPage />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
