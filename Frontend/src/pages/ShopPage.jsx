import NavBar from "../components/NavBar";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";
import FruitShop from "../components/FruitShop";

export default function ShopPage() {
  return (
    <div>
      <NavBar />

      {/* Fruits Shop Start */}
      <div className="container-fluid fruite py-5">
        <div className="container py-5">
          <div className="row g-4">
            <div className="col-lg-12">
              <div className="d-flex justify-content-end mb-3">
                <Link to="/adminAddProducts" className="btn btn-primary mt-4">
                  Add Product
                </Link>
              </div>
              <div className="row g-4">
                <div className="col-lg-3">
                  <div className="row g-4">
                    <div className="col-lg-12"></div>
                  </div>
                </div>
                <div className="col-lg-9">
                  <div className="row g-4 justify-content-center">
                    <FruitShop />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      {/* Fruits Shop End */}

      <Footer />
    </div>
  );
}