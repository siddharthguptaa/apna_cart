import React from "react";

export default function Product(props) {
  //console.log(props.iQuantity);
  return (
    <div className="row mt-3">
      <div className="col-5">
        <h2>
          {props.product.name}
          <span className="badge bg-secondary">₹{props.product.price}</span>
        </h2>
      </div>

      <div className="col-3">
        <div
          className="btn-group"
          role="group"
          aria-label="Basic mixed styles example"
        >
          <button
            type="button"
            className="btn btn-danger"
            onClick={() => props.dQuantity(props.index)}
          >
            -
          </button>
          <button type="button" className="btn btn-warning">
            {props.product.quantity}
          </button>
          <button
            type="button"
            className="btn btn-success"
            onClick={() => props.iQuantity(props.index)}
          >
            +
          </button>
        </div>
      </div>

      <div className="col-2">
        {props.product.price * props.product.quantity}
      </div>

      <div className="col-2">
        <button
          className="btn btn-danger"
          onClick={() => props.removeItem(props.index)}
        >
          Remove
        </button>
      </div>
    </div>
  );
}
