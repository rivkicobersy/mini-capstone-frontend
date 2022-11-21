import { useState } from "react";

export function ProductsIndex(props) {
  const [searchFilter, setSearchFilter] = useState("");

  return (
    <div id="products-index">
      <h1>All products !!!</h1>
      Search filter:{" "}
      <input value={searchFilter} onChange={(event) => setSearchFilter(event.target.value)} type="text" list="names" />
      <datalist id="names">
        {props.products.map((product) => (
          <option key={product.id}>{product.name}</option>
        ))}
      </datalist>
      <div className="row">
        {props.products
          .filter((product) => product.name.toLowerCase().includes(searchFilter.toLowerCase()))
          .map((product) => (
            <div className="col-md-3 mb-4" key={product.id}>
              <div className="card">
                <div className="card-body">
                  <h2 className="card-name">{product.name}</h2>
                  {product.images.length > 0 ? <img src={product.images[0].url} className="card-img-top" /> : null}
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
