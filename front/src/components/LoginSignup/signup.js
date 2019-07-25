import React from "react";
import "./signup.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput
} from "mdbreact";

const SignupForm = () => {
  return (
    <div className="sign-component">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <div className="header pt-3 grey lighten-2">
                <MDBRow className="d-flex justify-content-start">
                  <h3 className="deep-grey-text mt-3 mb-4 pb-1 mx-5">
                    Sign up
                  </h3>
                </MDBRow>
              </div>
              <MDBCardBody className="mx-4 mt-4">
                <MDBInput
                  label="Your first name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your middle name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your last name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <MDBInput
                  label="Your email"
                  icon="envelope"
                  group
                  type="email"
                  validate
                  error="wrong"
                  success="right"
                />

                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                />
                <MDBInput
                  label="Confirm your password"
                  icon="exclamation-triangle"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                />
                <div className="md-form pb-3">
                  <div className="form-check my-4">
                    <input
                      className="form-check-input"
                      type="checkbox"
                      value=""
                      id="defaultCheck17"
                    />
                    <label
                      className="form-check-labe black-text"
                      htmlFor="defaultCheck17"
                    >
                      Accept the
                      <a href="#!" className="red-text font-weight-bold">
                        Terms and Conditions
                      </a>
                    </label>
                  </div>
                </div>
                <div className="text-center mb-4 mt-5">
                  <MDBBtn
                    color="danger"
                    type="button"
                    className="btn-block z-depth-2"
                  >
                    Sign up
                  </MDBBtn>
                </div>
              </MDBCardBody>
            </MDBCard>
          </MDBCol>
        </MDBRow>
      </MDBContainer>
    </div>
  );
};
export default SignupForm;
