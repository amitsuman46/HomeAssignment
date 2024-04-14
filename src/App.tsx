import { useEffect, useState } from "react";
import "./App.css";
import Chart from "./components/Chart";
import Filter from "./components/Filter";
function App() {
  const [categories, setCategories] = useState([]);
  const [selectedCategory, setSelectedCategory] = useState("");
  const [products, setProducts] = useState([]);
  const [selectedProducts, setSelectedProducts] = useState([]);
  const [runReportEnabled, setRunReportEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  return (
    <>
      <div className="main">
        <div className="filter">
          <Filter
            categories={categories}
            setCategories={setCategories}
            selectedCategory={selectedCategory}
            setSelectedCategory={setSelectedCategory}
            products={products}
            setProducts={setProducts}
            selectedProducts={selectedProducts}
            setLoading={setLoading}
            setSelectedProducts={setSelectedProducts}
            setRunReportEnabled={setRunReportEnabled}
            runReportEnabled={runReportEnabled}
          />
        </div>
        <div className="chart">
          <Chart
            categories={categories}
            selectedProducts={selectedProducts}
            products={products}
            runReportEnabled={runReportEnabled}
            loading={loading}
            selectedCategory={selectedCategory}
          />
        </div>
      </div>
    </>
  );
}

export default App;
