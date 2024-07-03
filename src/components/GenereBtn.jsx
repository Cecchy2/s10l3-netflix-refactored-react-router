import React from "react";
import { Button, ButtonGroup, Col, Dropdown, DropdownButton, Row } from "react-bootstrap";

const GenereBtn = () => {
  return (
    <Row className="align-items-center">
      <Col className="d-flex align-items-center my-4">
        <h3 className="fs-5 text-white me-3">TV Shows</h3>
        <Dropdown as={ButtonGroup}>
          <Button variant="secondary" size="sm">
            Genere
          </Button>

          <Dropdown.Toggle split variant="secondary" id="dropdown-split-basic" size="sm" />

          <Dropdown.Menu>
            <Dropdown.Item href="#/action-1">Action</Dropdown.Item>
            <Dropdown.Item href="#/action-2">Fantasy</Dropdown.Item>
            <Dropdown.Item href="#/action-3">Horror</Dropdown.Item>
          </Dropdown.Menu>
        </Dropdown>
        <div className="ms-auto">
          <button class="bg-dark border border-light-subtle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-list"
              viewBox="0 0 16 16"
            >
              <path
                fill-rule="evenodd"
                d="M2.5 12a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5m0-4a.5.5 0 0 1 .5-.5h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5"
              />
            </svg>
          </button>
          <button class="bg-dark border border-light-subtle">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="white"
              class="bi bi-bounding-box-circles"
              viewBox="0 0 16 16"
            >
              <path d="M2 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M0 2a2 2 0 0 1 3.937-.5h8.126A2 2 0 1 1 14.5 3.937v8.126a2 2 0 1 1-2.437 2.437H3.937A2 2 0 1 1 1.5 12.063V3.937A2 2 0 0 1 0 2m2.5 1.937v8.126c.703.18 1.256.734 1.437 1.437h8.126a2 2 0 0 1 1.437-1.437V3.937A2 2 0 0 1 12.063 2.5H3.937A2 2 0 0 1 2.5 3.937M14 1a1 1 0 1 0 0 2 1 1 0 0 0 0-2M2 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2m12 0a1 1 0 1 0 0 2 1 1 0 0 0 0-2" />
            </svg>
          </button>
        </div>
      </Col>
    </Row>
  );
};

export default GenereBtn;
