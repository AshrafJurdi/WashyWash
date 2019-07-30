import React, { useState } from "react";
import { Card, CardDeck, Button, ButtonToolbar } from "react-bootstrap";
import "../Products/Products.css";

export default class Products extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      clothes: [
        {
          Image: "../../Assets/Images/jeans.jpeg",
          Name: "Jeans",
          Price: "33"
        },
        {
          Image: "../../Assets/Images/shirt.jpg",
          Name: "Shirt",
          Price: "15"
        },
        {
          Image: "../../Assets/Images/socks.jpg",
          Name: "socks",
          Price: "15"
        }
      ]
    };
  }
  deleteProducts = index => {
    let clothes = this.state.clothes;

    delete clothes[index];

    this.setState({ clothes });
  };
  editProducts = index => {
    let clothes = this.state.clothes;

    clothes[index].Name = prompt("Please edit Name");
    clothes[index].Price = prompt("Please edit Price");
    this.setState({ clothes });
  };
  // addProducts = () => {
  //   let clothes = this.state.clothes;
  //   var a = { Name: "", Price: "" };
  //   console.log(clothes);
  //   a.Name = prompt("Please add Name");
  //   a.Price = prompt("Please add Price");
  //   clothes.push(a);
  //   this.setState({ clothes });
  // };

  render() {
    return (
      <div className="Products">
        <ButtonToolbar className="Button_Add_Products">
          <Button
            variant="outline-dark"
            className="Button_Addproduct"
            onClick={this.addProducts}
          >
            <a class="button" href="#popup1">
              Add Product
            </a>
          </Button>
        </ButtonToolbar>

        <div className="Cards_Products">
          {this.state.clothes.map((item, index) => (
            <CardDeck>
              <Card className="Products_Card">
                <Card.Img
                  className="Card_Image"
                  variant="top"
                  src={require("../../Assets/Images/jeans.jpeg")}
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
    );
  }
}
