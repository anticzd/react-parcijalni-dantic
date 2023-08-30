import React from "react";
import { PropTypes } from "prop-types";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

const Account = ({ avatarURL, name, location, bio }) => {
  return (
    <div>
      <Container>
        <Row>
          <Col>
            <img className="img-size" src={avatarURL} alt={name} />
          </Col>
          <Col>
            <p className="name-style">{name}</p>
          </Col>
        </Row>
      </Container>

      <p className="text-align">Bio: {bio}</p>
      <p className="text-align">Location: {location}</p>
    </div>
  );
};

Account.propTypes = {
  avatarURL: PropTypes.string.isRequired,
  name: PropTypes.string.isRequired,
  bio: PropTypes.string,
  location: PropTypes.string,
};

export default Account;
