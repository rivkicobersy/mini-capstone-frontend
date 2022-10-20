export function ProductsIndex(props) {
  return (
    <div id="products-index">
      <h1>All products</h1>
      <div className="row">
        {props.products.map((product) => (
          <div className="col-md-3 mb-4" key={product.id}>
            <div className="card">
              <div className="card-body">
                <h2 className="card-title">{product.name}</h2>
                <p className="card-price">Price: ${product.price}</p>
                <p className="card-decription">Description: {product.description}</p>
                <button className="btn btn-primary" onClick={() => props.onSelectProduct(product)}>
                  More info
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
