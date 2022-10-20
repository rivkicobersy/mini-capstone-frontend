export function ProductsNew(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onCreateProducts(params, () => event.target.reset());
  };

  return (
    <div id="products-new">
      <h1>New Product</h1>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input name="name" className="form-control" type="text" />
        </div>
        <div>
          Price: <input name="price" className="form-control" type="price" />
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
