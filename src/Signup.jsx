import axios from "axios";
import { useState } from "react";

export function Signup() {
  const [errors, setErrors] = useState([]);
  const [name, setName] = useState("");
  const [status, setStatus] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();
    setErrors([]);
    const params = new FormData(event.target);
    axios
      .post("http://localhost:3000/users", params)
      .then((response) => {
        console.log(response.data);
        event.target.reset();
        window.location.href = "/"; // Change this to hide a modal, redirect to a specific page, etc.
      })
      .catch((error) => {
        setStatus(error.response.status);
        console.log(error.response.data.errors);
        setErrors(error.response.data.errors);
      });
  };

  return (
    <div id="signup">
      <h1>Signup</h1>
      {status ? <img src={`https://http.cat/${status}`} /> : null}
      <ul>
        {errors.map((error) => (
          <li key={error}>{error}</li>
        ))}
      </ul>
      <form onSubmit={handleSubmit}>
        <div>
          Name:{" "}
          <input
            name="name"
            value={name}
            onChange={(event) => setName(event.target.value)}
            className="form-control"
            type="text"
          />
          <small>{20 - name.length} characters remaining</small>
        </div>
        <div>
          Email: <input name="email" className="form-control" type="email" />
        </div>
        <div>
          Password: <input name="password" className="form-control" type="password" />
        </div>
        <div>
          Password confirmation: <input name="password_confirmation" className="form-control" type="password" />
        </div>
        <button className="btn btn-primary mt-3" type="submit">
          Signup
        </button>
      </form>
    </div>
  );
}
