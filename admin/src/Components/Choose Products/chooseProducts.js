import React, { Component, Fragment } from "react";
import "./chooseProducts.css";
import {
  MDBRow,
  MDBCol,
  MDBCard,
  MDBCardImage,
  MDBCardBody,
  MDBBadge,
  MDBBtn,
  MDBIcon
} from "mdbreact";

class ChooseProducts extends Component {
  constructor(props) {
    super(props);
    this.state = {
      cards: [
        {
          Image:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/12.jpg",
          Name: "Denim Shirt",
          Price: 6,
          value: 0
        },
        {
          Image:
            "https://mdbootstrap.com/img/Photos/Horizontal/E-commerce/Vertical/13.jpg",
          Name: "Hoodie",
          Price: 4,
          value: 0
        }
      ]
    };
  }

  decrease = id => {
    console.log(id);
    const cards = this.state.cards.map((card, index) => {
      if (index === id) {
        const newCard = {
          Image: card.Image,
          Name: card.Name,
          Price: card.Price,
          value: card.value === 0 ? 0 : card.value - 1
        };
        return newCard;
      } else return card;
    });

    this.setState({ cards });
  };

  increase = id => {
    const cards = this.state.cards.map((card, index) => {
      if (index === id) {
        const newCard = {
          Image: card.Image,
          Name: card.Name,
          Price: card.Price,
          value: card.value + 1
        };
        return newCard;
      } else return card;
    });

    this.setState({ cards });
  };

  render() {
    return (
      <div>
        <section className="text-center my-5">
          <h2 className="h1-responsive font-weight-bold text-center my-5">
            Choose Products
          </h2>
          <div className="card-box">
            {this.state.cards.map((card, index) => (
              <MDBRow>
                <MDBCol lg="3" md="6" className="mb-lg-0 mb-4">
                  <MDBCard className="align-items-center">
                    <MDBCardImage
                      src={card.Image}
                      top
                      alt="sample photo"
                      overlay="white-slight"
                      className="card-image"
                    />
                    <MDBCardBody className="text-center">
                      <h5>
                        <strong>
                          <p>{card.Name}</p>
                        </strong>
                      </h5>
                      <h4 className="font-weight-bold blue-text">
                        <strong>{"$" + card.Price * card.value}</strong>
                      </h4>
                      <div className="def-number-input number-input">
                        <MDBBtn
                          tag="a"
                          floating
                          gradient="peach"
                          onClick={() => this.decrease(index)}
                          className="minus"
                        >
                          <MDBIcon icon="minus" />
                        </MDBBtn>
                        <input
                          className="quantity"
                          name="quantity"
                          value={card.value}
                          onChange={() => console.log("change")}
                          type="number"
                        />

                        <MDBBtn
                          tag="a"
                          floating
                          gradient="blue"
                          onClick={() => this.increase(index)}
                          className="plus"
                        >
                          <MDBIcon icon="plus" />
                        </MDBBtn>
                      </div>
                    </MDBCardBody>
                  </MDBCard>
                </MDBCol>
              </MDBRow>
            ))}
          </div>
          <MDBBtn
            tag="c"
            floating
            gradient="blue"
            onClick={""}
            className="plus"
          >
            <MDBIcon>Choose</MDBIcon>
          </MDBBtn>
        </section>
      </div>
    );
  }
}

export default ChooseProducts;
