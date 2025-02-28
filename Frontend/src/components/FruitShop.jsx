import React from "react";
import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import ProductCard from "../components/ProductCard";

export default function ShopPage() {
  return (
    <div>
      <NavBar />

      {/* Fruits Shop Start */}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="d-flex justify-content-end mb-3">
          </div>
          <div className="row g-4 justify-content-center">
            <ProductCard categorySent="All Products" />
          </div>
        </div>
      </div>
      {/* Fruits Shop End */}
    </div>
  );
}