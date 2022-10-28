export function ProductsShow(props) {
  const handleSubmit = (event) => {
    event.preventDefault();
    const params = new FormData(event.target);
    props.onUpdateProduct(props.product.id, params);
    event.target.reset();
  };

  const handleClick = () => {
    props.onDestroyProduct(props.product);
  };

  return (
    <div>
      <h3>Product information</h3>
      <p>Name: {props.product.name}</p>
      <p>Price: {props.product.price}</p>
      <p>Description: {props.product.description}</p>
      <h4>Edit product</h4>
      <form onSubmit={handleSubmit}>
        <div>
          Name: <input className="form-control" defaultValue={props.product.name} name="name" type="text" />
        </div>
        <div>
          Price: <input className="form-control" defaultValue={props.product.price} name="price" type="price" />
        </div>
        <div>
          Description:{" "}
          <input className="form-control" defaultValue={props.product.description} name="description" type="text" />
        </div>
        <div>
          Image: <input className="form-control" defaultValue={props.product.image} name="image" type="text" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Update
        </button>
      </form>
      <button className="btn btn-primary mt-3" onClick={handleClick}>
        Destroy post
      </button>
    </div>
  );
}
