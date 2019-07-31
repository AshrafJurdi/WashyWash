import React, { useState } from "react";
import "./signup.css";
import {
  MDBContainer,
  MDBRow,
  MDBCol,
  MDBBtn,
  MDBCard,
  MDBCardBody,
  MDBInput,
  MDBCloseIcon
} from "mdbreact";

const SignupForm = () => {
  const [signup, setsignup] = useState([
    {
      firstname: "",
      middlename: "",
      lastname: "",
      email: "",
      password: "",
      confirmpassword: ""
    }
  ]);

  const handleChange = event => {
    event.preventDefault();
    var firstname = document.querySelector('[name="firstname"]').value;
    var middlename = document.querySelector('[name="middlename"]').value;
    var lastname = document.querySelector('[name="lastname"]').value;
    var email = document.querySelector('[name="Username"]').value;
    var pass = document.querySelector('[name="password"]').value;
    var confirmpassword = document.querySelector('[name="confirmpassword"]')
      .value;
    setsignup({
      firstname: firstname,
      middlename: middlename,
      lastname: lastname,
      email: email,
      password: pass,
      confirmpassword: confirmpassword
    });
  };
  console.log(signup);
  return (
    <div className="sign-component">
      <MDBContainer>
        <MDBRow>
          <MDBCol md="6">
            <MDBCard>
              <div className="header pt-3 grey lighten-2">
                <MDBCloseIcon />
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
                  name="firstname"
                  onChange={handleChange}
                />
                <MDBInput
                  label="Your middle name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="middlename"
                  onChange={handleChange}
                />
                <MDBInput
                  label="Your last name"
                  icon="user"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="lastname"
                  onChange={handleChange}
                />
                <MDBInput
                  label="UserName"
                  icon="envelope"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="text"
                  onChange={handleChange}
                />

                <MDBInput
                  label="Your password"
                  icon="lock"
                  group
                  type="password"
                  validate
                  name="password"
                  onChange={handleChange}
                />
                <MDBInput
                  label="Confirm your password"
                  icon="exclamation-triangle"
                  group
                  type="text"
                  validate
                  error="wrong"
                  success="right"
                  name="confirmpassword"
                  onChange={handleChange}
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
