
export default function Hero() {
  return (
    <div>
    {/* Hero Start */}
    <div className="container-fluid py-5 mb-5 hero-header">
    <div className="container py-5">
        <div className="row g-5 align-items-center">
        <div className="col-md-12 col-lg-7">
            {/* <h4 className="mb-3 text-secondary">100% Organ</h4> */}
            <h1 className="mb-5 display-3 text-primary">Grocery Shop</h1>
            <div className="position-relative mx-auto">
            <input className="form-control border-2 border-secondary w-75 py-3 px-4 rounded-pill" type="number" placeholder="Search" />
            <button type="submit" className="btn btn-primary border-2 border-secondary py-3 px-4 position-absolute rounded-pill text-white h-100" style={{"top":"0","right":"25%"}}>Submit Now</button>
            </div>
        </div>
        <div className="col-md-12 col-lg-5">
            <div id="carouselId" className="carousel slide position-relative" data-bs-ride="carousel">
            <div className="carousel-inner" role="listbox">
                <div className="carousel-item active rounded">
                <img src="https://www.eurokidsindia.com/blog/wp-content/uploads/2023/11/dairy-delights-870x570.jpg" className="img-fluid w-100 h-100 bg-secondary rounded" alt="First slide" />
                <a href="#" className="btn px-4 py-2 text-white rounded">Dairy Delights</a>
                </div>
                <div className="carousel-item rounded">
                <img src="https://img.magicpin.com/fresh_produce.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                <a href="#" className="btn px-4 py-2 text-white rounded">Fresh Picks</a>
                </div>
                <div className="carousel-item rounded">
                <img src="https://www.paknsave.co.nz/-/media/Project/Sitecore/Brands/Brand-PAKnSAVE/Articles/Pantry-Staples/Pantry-Staples-v2-800pxiStock-1212928413.jpg" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                <a href="#" className="btn px-4 py-2 text-white rounded">Kitchen Staples</a>
                </div>
                <div className="carousel-item rounded">
                <img src="https://evolvesnacks.com/cdn/shop/files/sale_new_year_ev_1024x1024.jpg?v=1734676478" className="img-fluid w-100 h-100 rounded" alt="Second slide" />
                <a href="#" className="btn px-4 py-2 text-white rounded">Snack Attack</a>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselId" data-bs-slide="prev">
                <span className="carousel-control-prev-icon" aria-hidden="true" />
                <span className="visually-hidden">Previous</span>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselId" data-bs-slide="next">
                <span className="carousel-control-next-icon" aria-hidden="true" />
                <span className="visually-hidden">Next</span>
            </button>
            </div>
        </div>
        </div>
    </div>
    </div>
    {/* Hero End */}
    </div>
  )
}
