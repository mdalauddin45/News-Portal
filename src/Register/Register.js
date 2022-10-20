import React, { useContext, useState } from "react";
import { AuthContext } from "../contexts/AuthProvider/AuthProvider";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";

const Register = () => {
  const [error, setError] = useState("");

  const { createUser } = useContext(AuthContext);

  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;
    const name = form.name.value;
    const photo = form.photo.value;
    const email = form.email.value;
    const password = form.password.value;
    console.log(name, photo, email, password);
    createUser(email, password)
      .then((result) => {
        const user = result.user;
        console.log(user);
        form.reset();
        setError("");
      })
      .catch((error) => {
        console.error(error);
        setError(error.message);
      });
  };

  return (
    <Form onSubmit={handleSubmit}>
      <Form.Text className="text-danger">{error}</Form.Text>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>User Name</Form.Label>
        <Form.Control type="text" name="name" placeholder="Enter Your Name" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Photo URL</Form.Label>
        <Form.Control type="text" name="photo" placeholder="Photo URL" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name="email" placeholder="Enter email" />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" placeholder="Password" />
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check
          type="checkbox"
          label={
            <>
              Accept <Link to="/terms">Terms and TermsAndConditions</Link>
            </>
          }
        />
      </Form.Group>
      <Button variant="primary" type="submit">
        Register
      </Button>
      {/* <Form.Text className="text-danger">
          We'll never share your email with anyone else.
        </Form.Text> */}
    </Form>
  );
};

export default Register;
