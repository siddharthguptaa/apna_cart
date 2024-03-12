import React from "react";

class Additem extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      Product_name: "",
      Product_price: 0,
    };
  }
  render() {
    return (
      <form
        className="row mb-5"
        onSubmit={(e) => {
          e.preventDefault();
          this.props.addProd(this.state.Product_name,Number(this.state.Product_price));
        }}
      >
        <div className="mb-3 col-4">
          <label htmlFor="exampleInputName" className="form-label">
            Product Name
          </label>
          <input
            type="text"
            className="form-control"
            id="exampleInputName"
            aria-describedby="nameHelp"
            name="Product_name"
            onChange={(e) => {
              this.setState({ Product_name: e.currentTarget.value });
            }}
          />
        </div>
        <div className="mb-3 col-4">
          <label htmlFor="exampleInputPrice" className="form-label">
            Price
          </label>
          <input
            type="number"
            className="form-control"
            id="exampleInputPrice"
            name="Product_price"
            onChange={(e) => {
              this.setState({ Product_price: Number(e.currentTarget.value) });
            }}
          />
        </div>

        <button type="submit" className="btn btn-primary col-4">
          Add Product
        </button>
      </form>
    );
  }
}

export default Additem;
