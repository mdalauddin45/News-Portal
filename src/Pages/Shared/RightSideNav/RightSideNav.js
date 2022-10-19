import React, { useContext } from "react";
import { ListGroup } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import {
  FaGoogle,
  FaGithub,
  FaFacebook,
  FaTwitter,
  FaWhatsapp,
  FaTwitch,
} from "react-icons/fa";
import { AuthContext } from "../../../contexts/AuthProvider/AuthProvider";
import BrandCarusel from "../BrandCarusel/BrandCarusel";

function RightSideNav() {
  const { googlLogInWithPopUp } = useContext(AuthContext);
  const handleGoogleLogin = () => {
    googlLogInWithPopUp()
      .then((result) => {
        const user = result.user;
        console.log(user);
      })
      .catch((error) => {
        console.error(error);
      });
  };
  return (
    <div>
      <ButtonGroup vertical>
        <Button onClick={handleGoogleLogin} variant="outline-primary">
          <FaGoogle></FaGoogle> Log in With Google
        </Button>
        <Button className="mt-2" variant="outline-dark">
          <FaGithub></FaGithub> Log in With Github
        </Button>
      </ButtonGroup>
      <div>
        <h5>Find us On</h5>
        <ListGroup>
          <ListGroup.Item className="mt-2">
            <FaFacebook></FaFacebook> FaceBook
          </ListGroup.Item>
          <ListGroup.Item className="mt-2">
            <FaWhatsapp></FaWhatsapp> Whatsapp
          </ListGroup.Item>
          <ListGroup.Item className="mt-2">
            <FaTwitter></FaTwitter> Twitter
          </ListGroup.Item>
          <ListGroup.Item className="mt-2">
            <FaTwitch></FaTwitch> Twitch
          </ListGroup.Item>
          <ListGroup.Item className="mt-2">Vestibulum at eros</ListGroup.Item>
        </ListGroup>
      </div>
      <div>
        <BrandCarusel></BrandCarusel>
      </div>
    </div>
  );
}

export default RightSideNav;
