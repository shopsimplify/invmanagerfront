const Products = ()=> {

    return (
        <div className="product">

            <div className="sidebar">
                <h2>Categories</h2>
                <ul>
                    <li>Electronics</li>
                    <li>Clothing</li>
                    <li>Furniture</li>
                    {/* <!-- Add more categories as needed --> */}
                </ul>
            </div>
            {/* <!-- Add more inventory items as needed --> */}

            <a href="#add-item" className="cta-button">Add New Item</a>
        </div>
    )

}

export default Products;