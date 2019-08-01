import React, { useState } from "react";
import { Card, CardDeck, Button, ButtonToolbar, Form } from "react-bootstrap";
import "../Products/Products.css";
import axios from "axios";

/**Products class
 *
 *
 * @export
 * @class Products
 * @extends {React.Component}
 */
export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      toggleMainPage: false,

      clothes: [
        {
          Image: "jeans.jpg",
          Name: "Jeans",
          Price: "33"
        },
        {
          Image: "shirt.jpg",
          Name: "Shirt",
          Price: "15"
        },
        {
          Image: "socks.jpg",
          Name: "socks",
          Price: "15"
        }
      ]
    };
  }

  /**function that deletes a product card
   *
   *
   * @memberof Products
   */
  deleteProducts = index => {
    let clothes = this.state.clothes;

    delete clothes[index];

    this.setState({ clothes });
  };

  /**function that edits a product card
   *
   *
   * @memberof Products
   */
  editProducts = index => {
    let clothes = [...this.state.clothes];

    const name = prompt("Please edit Name");
    if (name) {
      clothes[index].Name = name;

      const price = prompt("Please edit Price");
      if (price) clothes[index].Price = price;
    }

    this.setState({ clothes });
  };

  /**function that toggles the popup box
   *
   *
   * @memberof Products
   */
  showPop = () => {
    this.setState({ toggleMainPage: true });
  };

  /**
   *function that adds a product card
   *
   * @memberof Products
   */
  addProducts = e => {
    let clothes = this.state.clothes;
    e.preventDefault();
    var a = { Name: "", Price: "" };
    a.Name = e.target.Product_Name.value;
    a.Price = e.target.Product_Price.value;
    clothes.push(a);
    this.setState({ toggleMainPage: false, clothes });
    // console.log(a);

    // this.props.history.push("/#");
  };

  /**function for uploading images
   *
   *
   * @memberof Products
   */
  fileSelectHandler = event => {
    this.setState({
      selectedFile: event.target.files[0]
    });
  };
  // fileUploadHandler = e => {
  //   // const fd = new FormData();
  //   // fd.append("image", this.state.selectedFile, this.state.selectedFile.name);
  //   let clothes = this.state.clothes;
  //   var b = { Name: "", Price: "", selectedFile: "" };
  //   // b.Name = e.target.Product_Name.value;
  //   // b.Price = e.target.Product_Price.value;
  //   clothes.push(b);
  //   this.setState({ clothes });
  //   ////////////////////////////
  //   axios
  //     .post(
  //       "https://us-central1-fb-cloud-functions-demo.cloudfunctions.net/uploadFile",
  //       clothes
  //     )
  //     .then(res => {
  //       console.log(res);
  //     });
  // };

  /**returns content of Products.js Component
   *
   *
   * @returns
   * @memberof Products
   */
  render() {
    return (
      <div className="Products">
        <div>
          <ButtonToolbar className="Button_Add_Products">
            <a className="button" href="#popup1">
              <Button
                variant="outline-dark"
                className="Button_Addproduct"
                onClick={this.showPop}
              >
                Add Product
              </Button>
            </a>
          </ButtonToolbar>

          <div className="Cards_Products">
            {this.state.clothes.map((item, index) => (
              <CardDeck>
                <Card className="Products_Card">
                  <Card.Img
                    className="Card_Image"
                    variant="top"
                    src={item.Image}
                  />
                  <Card.Body className="Card_Body">
                    <Card.Text>Name:{item.Name}</Card.Text>
                    <Card.Text>Price:{item.Price}</Card.Text>
                    <div className="Icons">
                      <span>
                        <i
                          class="fas fa-trash-alt"
                          onClick={() => this.deleteProducts(index)}
                        />
                      </span>

                      <span onClick={() => this.editProducts(index)}>
                        <i class="fas fa-edit" />
                      </span>
                    </div>
                  </Card.Body>
                </Card>
              </CardDeck>
            ))}
          </div>
        </div>
        {this.state.toggleMainPage && (
          <div id="popup1" className="overlay_AddProduct">
            <div className="popup_AddProduct">
              <a className="close" href="#">
                &times;
              </a>
              <div className="content">
                <form onSubmit={e => this.addProducts(e)}>
                  <div className="Inputs_AddProduct">
                    <input
                      type="file"
                      placeholder="Upload Image"
                      onChange={this.fileSelectHandler}
                    />
                    {/* <button onClick={e => this.fileUploadHandler(e)}>
                      Upload Image
                    </button> */}
                    <input
                      placeholder="Product Name"
                      // className="Product_Name"
                      name="Product_Name"
                      required
                    />
                    <input
                      name="Product_Price"
                      placeholder="Product Price"
                      required
                      // className="Product_Price"
                    />
                  </div>
                  <div className="Buttons_AddProduct">
                    {/*   <button variant="outline-dark" onClick={this.addProducts}>
                    Create
                  </button> */}
                    <input
                      type="submit"
                      value="Create"
                      // onSubmit={e => this.addProducts(e)}
                    />
                  </div>
                </form>
              </div>
            </div>
          </div>
        )}
      </div>
    );
  }
}
