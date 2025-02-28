import { useState } from "react";
import AdminNavbar from "../../components/AdminNavbar";
import axios from 'axios';


export default function AdminAddProducts() {

    const [successMessage, setSuccessMessage] = useState('');
    const [values, setValues] = useState({
        productName: '',
        productDescription: '',
        productImage: '',
        productPrice: '',
        productCategory: ''
    });

    const handleInput = (event) => {
        const { name, value } = event.target;
        const convertedValue = name === 'productCategory' ? String(value) : value;
        setValues(prev => ({ ...prev, [name]: convertedValue }));
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post('http://localhost:5000/api/products', {
                name: values.productName,
                description: values.productDescription,
                image: values.productImage,
                price: values.productPrice,
                category: values.productCategory
            });
            setSuccessMessage('Product added successfully');
            setValues({
                productName: '',
                productDescription: '',
                productImage: '',
                productPrice: '',
                productCategory: ''
            });
        } catch (error) {
            console.log(error);
            setSuccessMessage('Failed to add product');
        }
    }

    return (
        <div className="container-fluid">
            <AdminNavbar />
            <div className="container py-5">
                <div className="row justify-content-center">
                    <div className="col-lg-8">
                        <div className="card shadow">
                            <div className="card-body p-5">
                                <h2 className="text-center mb-4 text-primary">Add New Product</h2>
                                
                                {successMessage && (
                                    <div className={`alert ${successMessage.includes('successfully') ? 'alert-success' : 'alert-danger'} mb-4`}>
                                        {successMessage}
                                    </div>
                                )}

                                <form onSubmit={handleSubmit}>
                                    <div className="mb-3">
                                        <label className="form-label">Product Name</label>
                                        <input 
                                            type="text" 
                                            className="form-control"
                                            name="productName"
                                            value={values.productName}
                                            onChange={handleInput}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Description</label>
                                        <textarea 
                                            className="form-control"
                                            name="productDescription"
                                            value={values.productDescription}
                                            onChange={handleInput}
                                            rows="3"
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Image URL</label>
                                        <input 
                                            type="text"
                                            className="form-control"
                                            name="productImage"
                                            value={values.productImage}
                                            onChange={handleInput}
                                            required
                                        />
                                    </div>

                                    <div className="mb-3">
                                        <label className="form-label">Price</label>
                                        <input 
                                            type="number"
                                            className="form-control"
                                            name="productPrice"
                                            value={values.productPrice}
                                            onChange={handleInput}
                                            required
                                        />
                                    </div>

                                    <div className="mb-4">
                                        <label className="form-label">Category</label>
                                        <select 
                                            className="form-select"
                                            name="productCategory"
                                            value={values.productCategory}
                                            onChange={handleInput}
                                            required
                                        >
                                            <option value="">Select a category</option>
                                            <option value="Fruits">Fresh Picks</option>
                                            <option value="Vegetables">Dairy Delights</option>
                                            <option value="Meat">Kitchen Staples</option>
                                            <option value="Dairy">Snack Attack</option>
                                        </select>
                                    </div>

                                    <div className="d-grid">
                                        <button type="submit" className="btn btn-primary btn-lg">
                                            Add Product
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )



  }
