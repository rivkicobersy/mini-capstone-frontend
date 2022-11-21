import axios from "axios";

export function ProductsNew() {
  const handleCreateProduct = (params) => {
    axios.post("http://localhost:3000/products.json", params).then((response) => {
      console.log("Created products", response);
      window.location.href = "/";
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    handleCreateProduct(params);
    event.target.reset();
  };

  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name!!: <input name="name" className="form-control" type="text" />
        </div>
        <div>
          Price: <input name="price" className="form-control" type="price" />
        </div>
        <div>
          Supplier Id: <input name="supplier_id" className="form-control" type="number" />
        </div>
        <div>
          Image: <input name="image" className="form-control" type="text" />
        </div>
        <div>
          Description: <input name="description" className="form-control" type="text" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Create product
        </button>
      </form>
    </div>
  );
}
