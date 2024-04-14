import React, { useEffect } from "react";
import InputLabel from "@mui/material/InputLabel";
import Box from "@mui/material/Box";
import MenuItem from "@mui/material/MenuItem";
import FormControl from "@mui/material/FormControl";
import Button from "@mui/material/Button";
import Select from "@mui/material/Select";
import { FilterProps } from "../models/models";
import CloseIcon from "@mui/icons-material/Close";

const Filter = ({
  categories,
  setCategories,
  selectedCategory,
  setSelectedCategory,
  products,
  setProducts,
  selectedProducts,
  setSelectedProducts,
  setRunReportEnabled,
  setLoading,
  runReportEnabled,
}: FilterProps) => {
  useEffect(() => {
    const fetchCategories = async () => {
      try {
        const response = await fetch(
          "https://dummyjson.com/products/categories"
        );
        const data = await response.json();
        setCategories(data);
      } catch (error) {
        console.log("Error while fetching categories: " + error);
      }
    };
    fetchCategories();
  }, []);

  const handleCategoryChange = async (event: any) => {
    setRunReportEnabled(false);
    const selectedCat = event.target.value;
    setSelectedCategory(selectedCat);

    if (selectedCat) {
      try {
        const response = await fetch(
          `https://dummyjson.com/products/category/${selectedCat}`
        );
        const data = await response.json();
        setProducts(data.products);
        console.log(data.products);
        setSelectedProducts([]);
      } catch (error) {
        console.log("Error while fetching products: " + error);
        setProducts([]);
      }
    } else {
      setProducts([]);
      setSelectedProducts([]);
    }
  };

  const handleProductChange = (event: any) => {
    setRunReportEnabled(false);
    const selectedValues = event.target.value;
    setSelectedProducts(selectedValues);
    console.log(selectedProducts);
  };

  const clearHandler = () => {
    setSelectedCategory("");
    setSelectedProducts([]);
    setRunReportEnabled(false);
  };

  const handleRunReport = () => {
    setLoading(true);
    setTimeout(() => {
      setRunReportEnabled(true);
      setLoading(false);
    }, 3000);
  };
  return (
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        justifyContent: "space-between",
        height: "100%",
        border: "2px solid black",
        padding: "1rem",
      }}
    >
      <Box>
        <Box
          sx={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "1rem",
            marginBottom: "2.5rem",
          }}
        >
          <h1>Filters</h1>
          <Button variant="text" onClick={clearHandler}>
            Clear
          </Button>
        </Box>
        <Box
          sx={{
            marginTop: "10px",
            minWidth: 120,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl sx={{ width: "80%" }}>
            <InputLabel id="category-select-label">Categories</InputLabel>
            <div style={{ display: "flex", width: "100%" }}>
              <Select
                style={{ width: "100%" }}
                labelId="category-select-label"
                id="category-select"
                value={selectedCategory}
                onChange={handleCategoryChange}
                label="Categories"
              >
                <MenuItem value="">Select Category</MenuItem>
                {categories.map((category: any) => (
                  <MenuItem key={category} value={category}>
                    {category}
                  </MenuItem>
                ))}
              </Select>
              <div style={{ marginLeft: "-55px", marginTop: "17px", zIndex:"1", cursor:"pointer"}} onClick={clearHandler}>
                <CloseIcon />
              </div>
            </div>
          </FormControl>
        </Box>
        <Box
          sx={{
            marginTop: "10px",
            minWidth: 120,
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
          }}
        >
          <FormControl sx={{ width: "80%" }}>
            <InputLabel id="product-select-label">Products</InputLabel>
            <div style={{ display: "flex", width: "100%" }}>
              <Select
                style={{ width: "100%",paddingRight:"20px" }}
                labelId="product-select-label"
                id="product-select"
                multiple
                value={selectedProducts}
                onChange={handleProductChange}
                disabled={!selectedCategory || products.length === 0}
                label="Products"
              >
                {products.map((product: any) => (
                  <MenuItem key={product.id} value={product.title}>
                    {product.title}
                  </MenuItem>
                ))}
              </Select>
              <div style={{ marginLeft: "-55px", marginTop: "17px", zIndex:"1",cursor:"pointer"}} onClick={()=>{setSelectedProducts([])}}>
                <CloseIcon />
              </div>
            </div>
          </FormControl>
        </Box>
      </Box>
      <Box sx={{ alignSelf: "center", marginBottom: "1rem" }}>
        <Button
          variant="contained"
          onClick={handleRunReport}
          disabled={runReportEnabled}
        >
          Run Report
        </Button>
      </Box>
    </Box>
  );
};

export default Filter;
