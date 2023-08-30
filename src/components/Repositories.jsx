import React from "react";
import { PropTypes } from "prop-types";
import ListGroup from "react-bootstrap/ListGroup";

const Repositories = ({ repositories }) => {
  return (
    <div>
      <ul>
        {repositories.map((r) => (
          <ListGroup.Item className="list-style" key={r.id}>
            {r.name}
          </ListGroup.Item>
        ))}
      </ul>
    </div>
  );
};

Repositories.propTypes = {
  repositories: PropTypes.array.isRequired,
};

export default Repositories;
